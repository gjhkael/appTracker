package com.podk.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;

import com.podk.model.Status;
import com.podk.persistence.dao.BaseDao;
import com.podk.persistence.dao.FileAssetDao;
import com.podk.persistence.dao.FileTypeDao;
import com.podk.persistence.entity.FileAsset;
import com.podk.persistence.entity.Identifiable;
import com.podk.persistence.entity.Uploads;

public abstract class BaseReadWriteController<T extends Identifiable> extends BaseReadOnlyController<T> {

	@Autowired
	protected FileAssetDao fileAssetDao;

	@Autowired
	protected FileTypeDao fileTypeDao;

	protected BaseReadWriteController(BaseDao<T, Integer> entityDao) {
		super(entityDao);
	}

	/**
	 * Create a new entity
	 * 
	 * @param entity
	 *            the Entity
	 * @return the entity as a response entity
	 */
	@RequestMapping(path = "/create", method = RequestMethod.POST)
	public ResponseEntity<Status> create(@RequestBody T entity) {
		String entityTypeName = entity.getClass().getSimpleName();
		try {
			entityDao.save(entity);
		} catch (Exception ex) {
			// TODO: Add @ControllerAdvice ExceptionHandler
			return new ResponseEntity<Status>(new Status("Problem creating " + entityTypeName + ": " + ex.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Status>(new Status(entity.getId(), entityTypeName + " created successfully", entity),
				HttpStatus.OK);
	}

	/**
	 * Delete an entity
	 * 
	 * @param id
	 *            The id of the entity to delete
	 * @return a Status indicating success or failure
	 */
	@RequestMapping(path = "delete/{id}", method = RequestMethod.GET)
	public ResponseEntity<Status> delete(@PathVariable("id") int id) {
		T entity = entityDao.findOne(id);
		String entityTypeName = entity.getClass().getSimpleName();
		try {
			entityDao.delete(entity);
		} catch (Exception ex) {
			return new ResponseEntity<Status>(new Status(id, entityTypeName + " not found!"), HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Status>(new Status(id, entityTypeName + " deleted successfully!"), HttpStatus.OK);
	}

	@SuppressWarnings("unchecked")
	protected ResponseEntity<FileAsset> doUpload(Integer entityId, Integer fileTypeId, String fileDescription, MultipartFile file)
			throws IOException {
		FileAssetController fileController = new FileAssetController(fileAssetDao, fileTypeDao);				
		ResponseEntity<FileAsset> re = fileController.uploadFile(fileTypeId, fileDescription, file);		
		if (re.getStatusCode() == HttpStatus.OK) {
			Uploads entity = (Uploads) entityDao.findOne(entityId);
			entity.addUpload(re.getBody());
			entityDao.save((T)entity);
			return re;
		} else {
			// TODO: Add @ControllerAdvice ExceptionHandler
			return new ResponseEntity<FileAsset>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		
	}
}

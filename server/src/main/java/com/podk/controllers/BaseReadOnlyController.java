package com.podk.controllers;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.podk.persistence.dao.BaseDao;
import com.podk.persistence.entity.Identifiable;

public abstract class BaseReadOnlyController<T extends Identifiable> {

	protected BaseDao<T, Integer> entityDao;

	protected BaseReadOnlyController(BaseDao<T, Integer> entityDao) {
		this.entityDao = entityDao;
	}

	/**
	 * Get an entity by id
	 * 
	 * @param id
	 *            The id of the entity
	 * @return The entity or an error if not found.
	 */
	@RequestMapping(path = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<T> getByID(@PathVariable("id") int id) {
		T entity = null;
		try {
			entity = entityDao.findOne(id);			
		} catch (Exception ex) {
			// TODO: Add @ControllerAdvice ExceptionHandler
			return new ResponseEntity<T>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<T>(entity,HttpStatus.OK);
	}

	/**
	 * Get list of an entity
	 * 
	 * @return The list of an entity in the system
	 */
	@RequestMapping(path = "/list", method = RequestMethod.GET)
	public ResponseEntity<List<T>> getAll() {
		List<T> entityList = null;
		try {
			entityList = (List<T>) entityDao.findAll();
		} catch (Exception ex) {
			// TODO: Add @ControllerAdvice ExceptionHandler
			return new ResponseEntity<List<T>>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<List<T>>(entityList, HttpStatus.OK);
	}
}

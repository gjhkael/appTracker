package com.podk.controllers;

import java.io.IOException;
import java.util.Date;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import com.podk.model.Status;
import com.podk.persistence.dao.ApplicationDao;
import com.podk.persistence.dao.CompanyDao;
import com.podk.persistence.entity.Application;
import com.podk.persistence.entity.Company;
import com.podk.persistence.entity.ContactType;
import com.podk.persistence.entity.FileAsset;

import io.swagger.annotations.Api;

@Api(tags = "Application")
@Controller
@RequestMapping(path = "/application", produces = "application/json")
public class ApplicationController extends BaseReadWriteController<Application> {

	@Autowired
	private CompanyDao companyDao;

	private ApplicationDao applicationDao;

	@Autowired
	protected ApplicationController(ApplicationDao applicationDao) {
		super(applicationDao);
		this.applicationDao = applicationDao;
	}

	/**
	 * Create a new application
	 * 
	 * @param application
	 *            the Application
	 * @return the application as a response entity
	 */
	@Override
	@RequestMapping(path = "/create", method = RequestMethod.POST)
	public ResponseEntity<Status> create(@RequestBody Application application) {
		try {
			Company company = application.getCompany();
			if (company.getId() == null) {
				companyDao.save(company);
			} else {
				boolean save = false;
				Company origCompany = companyDao.findOne(company.getId());
				if (company.getAddress()!=null && company.getAddress()!=origCompany.getAddress()){
					origCompany.setAddress(company.getAddress());
					save = true;
				}
				if (company.getIconId()!=0 && company.getIconId()!=origCompany.getIconId()){
					origCompany.setIcon(new FileAsset(company.getIconId()));
					save = true;
				}
				if (save)
				companyDao.save(origCompany);
			}
			applicationDao.save(application);
		} catch (Exception ex) {
			// TODO: Add @ControllerAdvice ExceptionHandler
			return new ResponseEntity<Status>(new Status("Problem creating application: " + ex.getMessage()),
					HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<Status>(
				new Status(application.getId(), "Application Created Successfully", application), HttpStatus.OK);
	}

	/**
	 * Update the an application
	 * 
	 * @param id
	 *            The id of the application to update.
	 * @param applicationUpdate
	 *            The new values for the application.
	 * @return updated application as a response entity
	 */
	@RequestMapping(path = "/update/{id}", method = RequestMethod.PATCH)
	public ResponseEntity<Application> update(@PathVariable("id") int id, @RequestBody Application applicationUpdate) {
		Application application = null;
		try {

			Company newCompany = applicationUpdate.getCompany();
			Boolean newAppliedTo = applicationUpdate.getAppliedTo();
			ContactType newContactType = applicationUpdate.getContactType();
			String newPosition = applicationUpdate.getPosition();
			String newTag = applicationUpdate.getTag();
			String newContactInfo = applicationUpdate.getContactInfo();
			String newNotes = applicationUpdate.getNotes();
			Date newDateApplied = applicationUpdate.getDateApplied();
			Date newFollowUp = applicationUpdate.getFollowUp();

			application = applicationDao.findOne(id);

			if (newCompany != null)
				application.setCompany(newCompany);

			if (newAppliedTo != null)
				application.setAppliedTo(newAppliedTo);

			if (newContactType != null)
				application.setContactType(newContactType);

			if (newPosition != null)
				application.setPosition(newPosition);

			if (newTag != null)
				application.setTag(newTag);

			if (newContactInfo != null)
				application.setContactInfo(newContactInfo);

			if (newNotes != null)
				application.setContactInfo(newNotes);

			if (newDateApplied != null)
				application.setDateApplied(newDateApplied);

			if (newFollowUp != null)
				application.setFollowUp(newFollowUp);

			applicationDao.save(application);
		} catch (Exception ex) {
			// TODO: Add @ControllerAdvice ExceptionHandler
			return new ResponseEntity<Application>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Application>(application, HttpStatus.OK);
	}

	@RequestMapping(value = "/upload", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE }, method = RequestMethod.POST)
	public ResponseEntity<FileAsset> uploadApplicationFile(@RequestParam Integer id, @RequestParam Integer fileTypeId,
			@RequestParam(required=false) String fileDescription, @RequestPart MultipartFile file) throws IOException {
		return doUpload(id, fileTypeId, fileDescription, file);
	}
}
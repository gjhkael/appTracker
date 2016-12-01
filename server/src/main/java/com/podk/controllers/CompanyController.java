package com.podk.controllers;

import java.io.IOException;

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

import com.podk.constants.FileTypes;
import com.podk.model.Status;
import com.podk.persistence.dao.CompanyDao;
import com.podk.persistence.entity.Company;
import com.podk.persistence.entity.FileAsset;

import io.swagger.annotations.Api;

@Api(tags = "Company")
@Controller
@RequestMapping(path = "/company", produces = "application/json")
public class CompanyController extends BaseReadWriteController<Company> {

	private CompanyDao companyDao;

	@Autowired
	protected CompanyController(CompanyDao companyDao) {
		super(companyDao);
		this.companyDao = companyDao;
	}

	/**
	 * Update a company
	 * 
	 * @param id
	 *            The id of the company to update.
	 * @param companyUpdate
	 *            The new values for the company.
	 * @return updated company as a response entity
	 */
	@RequestMapping(path = "/update/{id}", method = RequestMethod.PUT)
	public ResponseEntity<Status> update(@PathVariable("id") int id, @RequestBody Company companyUpdate) {
		Company company = null;
		try {
			company = companyDao.findOne(id);
			company.setAddress(companyUpdate.getAddress());
			company.setName(companyUpdate.getName());
			companyDao.save(company);
		} catch (Exception ex) {
			// TODO: Add @ControllerAdvice ExceptionHandler
			return new ResponseEntity<Status>(new Status("Problem updating company: " + ex.getMessage()),
					HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Status>(new Status(company.getId(), "Company created successfully!", company),
				HttpStatus.OK);
	}

	@RequestMapping(value = "/upload", consumes = { MediaType.MULTIPART_FORM_DATA_VALUE }, method = RequestMethod.POST)
	public ResponseEntity<FileAsset> addIcon(@RequestParam Integer id, @RequestPart MultipartFile file)
			throws IOException {
		return doUpload(id, FileTypes.FILETYPE_COMPANYICON, "icon", file);
	}
}
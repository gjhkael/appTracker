package com.podk.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.podk.persistence.dao.ContactTypeDao;
import com.podk.persistence.entity.ContactType;
import io.swagger.annotations.Api;

@Api(tags = "ContactType")
@Controller
@RequestMapping(path = "/contact-type", produces = "application/json")
public class ContactTypeController extends BaseReadOnlyController<ContactType> {

	@Autowired
	protected ContactTypeController(ContactTypeDao contactTypeDao) {
		super(contactTypeDao);
	}
}
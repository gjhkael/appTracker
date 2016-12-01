package com.podk.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.podk.persistence.dao.FileTypeDao;
import com.podk.persistence.entity.FileType;

import io.swagger.annotations.Api;

@Api(tags = "FileType")
@Controller
@RequestMapping(path = "/file-type", produces = "application/json")
public class FileTypeController extends BaseReadOnlyController<FileType> {

	@Autowired
	protected FileTypeController(FileTypeDao fileTypeDao) {
		super(fileTypeDao);
	}
}
package com.podk.controllers;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import javax.servlet.http.HttpServletResponse;

import org.apache.tomcat.util.http.fileupload.IOUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.multipart.MultipartFile;
import com.podk.persistence.dao.FileAssetDao;
import com.podk.persistence.dao.FileTypeDao;
import com.podk.persistence.entity.FileAsset;

import io.swagger.annotations.Api;

@Api(tags = "FileAsset")
@Controller
@RequestMapping(path = "/file-asset", produces = "application/json")
public class FileAssetController {

	@Autowired
	FileTypeDao fileTypeDao;

	private FileAssetDao fileAssetDao;

	@Autowired
	protected FileAssetController(FileAssetDao fileAssetDao) {
		this.fileAssetDao = fileAssetDao;
	}

	protected FileAssetController(FileAssetDao fileAssetDao, FileTypeDao fileTypeDao) {
		this.fileAssetDao = fileAssetDao;
		this.fileTypeDao = fileTypeDao;
	}

	public ResponseEntity<FileAsset> uploadFile(Integer typeId, String description, MultipartFile file)
			throws IOException {
		FileAsset fileAsset = new FileAsset();
		fileAsset.setDescription(description);
		fileAsset.setFileName(file.getOriginalFilename());
		fileAsset.setContent(file.getBytes());
		fileAsset.setFileType(fileTypeDao.findOne(typeId));
		fileAssetDao.save(fileAsset);
		return ResponseEntity.ok(fileAsset);
	}

	@RequestMapping(value = "/download/{id}", method = RequestMethod.GET)
	public void getFileContent(@PathVariable("id") int id, HttpServletResponse response) {
		try {
			FileAsset fileAsset = fileAssetDao.findOne(id);
			response.setHeader("Content-Disposition", "inline;filename=\"" + fileAsset.getFileName() + "\"");
			InputStream is = new ByteArrayInputStream(fileAsset.getContent());
			IOUtils.copy(is, response.getOutputStream());
			response.flushBuffer();
		} catch (IOException ex) {
			throw new RuntimeException("IOError writing file to output stream");
		}
	}
}
package com.podk.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.ForeignKey;;

@Entity
@Table(name = "fileAsset")
@NamedQueries({ @NamedQuery(name = "FileAsset.findAll", query = "SELECT f FROM FileAsset f"),
		@NamedQuery(name = "FileAsset.findByID", query = "SELECT f FROM FileAsset f WHERE f.id = :id"),
		@NamedQuery(name = "FileAsset.findByFileName", query = "SELECT f FROM FileAsset f WHERE f.fileName = :fileName") })
public class FileAsset extends Identifiable {

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "typeID", foreignKey = @ForeignKey(name = "FK_fileAsset_typeID") , nullable = false, updatable = false)
	private FileType fileType;

	@Column(name = "description", nullable = true, updatable = true, length = 255)
	private String description;

	@Column(name = "filename", nullable = false, updatable = true, length = 255)
	private String fileName;

	@Lob
	@Column(name = "content", nullable = false, updatable = true)
	private byte[] content;

	public FileAsset() {
	}

	public FileAsset(String fileName, byte[] content) {
		this.fileName = fileName;
		this.content = content;
	}

	public FileType getFileType() {
		return fileType;
	}

	public FileAsset setFileType(FileType fileType) {
		this.fileType = fileType;
		return this;
	}

	public String getDescription() {
		return description;
	}

	public FileAsset setDescription(String name) {
		this.description = name;
		return this;
	}

	public String getFileName() {
		return fileName;
	}

	public FileAsset setFileName(String fileName) {
		this.fileName = fileName;
		return this;
	}

	@JsonIgnore
	public byte[] getContent() {
		return content;
	}

	@JsonIgnore
	public FileAsset setContent(byte[] content) {
		this.content = content;
		return this;
	}
}

package com.podk.persistence.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

import io.swagger.annotations.ApiModelProperty;

@Entity
@Table(name = "company")
public class Company extends Identifiable implements Uploads{

	@JsonProperty(required = true)
	@ApiModelProperty(notes = "The name of the company", required = true)
	@Column(name = "name", nullable = false, unique = true, updatable = false, length = 255)
	@NotNull
	private String name;

	@JsonProperty(required = false)
	@ApiModelProperty(notes = "The address of the company", required = false)
	@Column(name = "address", nullable = true, updatable = true, length = 255)
	private String address;

	@OneToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "iconID", foreignKey = @ForeignKey(name = "FK_Company_iconID") , nullable = true, updatable = true)
	private FileAsset companyIcon;
	
	public Company() {
		super();
	}

	public String getName() {
		return name;
	}

	public Company setName(String name) {
		this.name = name;
		return this;
	}

	public String getAddress() {
		return address;
	}

	public Company setAddress(String address) {
		this.address = address;
		return this;
	}
	
	public void setIcon(FileAsset icon) {
		this.companyIcon = icon;
	}
	
	public Integer getIconId(){
		return companyIcon==null?new Integer(0):companyIcon.getId();
	}

	@Override
	@JsonIgnore
	public void addUpload(FileAsset fileAsset) {
		setIcon(fileAsset);		
	}
}

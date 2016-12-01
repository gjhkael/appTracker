package com.podk.persistence.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ForeignKey;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.FetchMode;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "application")
public class Application extends Identifiable implements Uploads {

	@OneToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "applicationFileMap", joinColumns = {
			@JoinColumn(name = "applicationID", referencedColumnName = "id") }, inverseJoinColumns = {
					@JoinColumn(name = "fileID", referencedColumnName = "id") })
	@Fetch(value = FetchMode.SUBSELECT)
	private List<FileAsset> applicationFiles = new ArrayList<FileAsset>();

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "companyID", foreignKey = @ForeignKey(name = "FK_application_companyID") , nullable = false, updatable = true)
	private Company company;

	@Column(name = "tag", nullable = false, updatable = true, length = 100)
	private String tag;

	@Column(name = "position", nullable = false, updatable = true, length = 255)
	private String position;

	@Column(name = "appliedTo", nullable = false, updatable = true)
	private Boolean appliedTo;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "contactTypeID", foreignKey = @ForeignKey(name = "FK_application_contactTypeID") , nullable = true, updatable = true)
	private ContactType contactType;

	@Lob
	@Column(name = "contactInfo", nullable = true, updatable = true)
	private String contactInfo;

	@Column(name = "dateApplied", nullable = true, updatable = true)
	private Date dateApplied;

	@Column(name = "followUp", nullable = true, updatable = true)
	private Date followUp;

	@Lob
	@Column(name = "notes", nullable = true, updatable = true)
	private String notes;

	public Application() {
	}

	public Application(Company company, String tag, String position, Boolean appliedTo) {
		this.company = company;
		this.tag = tag;
		this.position = position;
		this.appliedTo = appliedTo;
	}

	public List<FileAsset> getApplicationFiles() {
		return applicationFiles;
	}

	public Application addApplicationFile(FileAsset fileAsset) {
		this.applicationFiles.add(fileAsset);
		return this;
	}

	public Company getCompany() {
		return company;
	}

	public Application setCompany(Company company) {
		this.company = company;
		return this;
	}

	public String getTag() {
		return tag;
	}

	public Application setTag(String tag) {
		this.tag = tag;
		return this;
	}

	public String getPosition() {
		return position;
	}

	public Application setPosition(String position) {
		this.position = position;
		return this;
	}

	public Boolean getAppliedTo() {
		return appliedTo;
	}

	public Application setAppliedTo(Boolean appliedTo) {
		this.appliedTo = appliedTo;
		return this;
	}

	public ContactType getContactType() {
		return contactType;
	}

	public Application setContactType(ContactType contactType) {
		this.contactType = contactType;
		return this;
	}

	public String getContactInfo() {
		return contactInfo;
	}

	public Application setContactInfo(String contactInfo) {
		this.contactInfo = contactInfo;
		return this;
	}

	public Date getDateApplied() {
		return dateApplied;
	}

	public Application setDateApplied(Date dateApplied) {
		this.dateApplied = dateApplied;
		return this;
	}

	public Date getFollowUp() {
		return followUp;
	}

	public Application setFollowUp(Date followUp) {
		this.followUp = followUp;
		return this;
	}

	public String getNotes() {
		return notes;
	}

	public Application setNotes(String notes) {
		this.notes = notes;
		return this;
	}

	@Override
	@JsonIgnore
	public void addUpload(FileAsset fileAsset) {		
		addApplicationFile(fileAsset);
	}
}

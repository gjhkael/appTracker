package com.podk.model;

public class Status {

	private int id;
	private String message;
	private Object entity;
	
	public Status() {
	}

	public Status(String message) {	
		this.message = message;
	}
	
	public Status(int id, String message) {
		this.id = id;
		this.message = message;
	}

	public Status(int id, String message, Object entity) {
		this(id,message);
		this.entity = entity;
	}
	
	public Status(String message, Object entity) {
		this.message = message;
		this.entity = entity;
	}
	
	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}
	
	public Object getEntity() {
		return entity;
	}

	public void setEntity(Object entity) {
		this.entity = entity;
	}
}

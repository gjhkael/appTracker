package com.podk.persistence.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
@Inheritance
public abstract class Identifiable {
	
	@Id
	@GeneratedValue
	@Column(name = "id")
	protected Integer id;

	public Identifiable(){}
	
	public Integer getId() {
		return id;
	}
}

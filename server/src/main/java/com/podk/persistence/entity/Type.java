package com.podk.persistence.entity;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

@MappedSuperclass
public abstract class Type extends Identifiable {
	
	@Column(name = "type", nullable = false, length = 100)
	private String type;

	public String getType() {
		return type;
	}
}

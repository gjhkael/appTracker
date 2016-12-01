package com.podk.persistence.entity;

import javax.persistence.Cacheable;
import javax.persistence.Entity;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import org.hibernate.annotations.Immutable;

import com.podk.constants.QueryNames;

@Entity
@Table(name = "`contactType`")
@NamedQuery(name = QueryNames.CONTACTTYPE_FINDALL, query = "SELECT a FROM ContactType a ORDER BY upper(a.type)")
@Immutable
@Cacheable
public class ContactType extends Type {
}

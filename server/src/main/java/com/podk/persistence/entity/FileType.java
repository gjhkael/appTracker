package com.podk.persistence.entity;

import javax.persistence.Cacheable;
import javax.persistence.Entity;
import javax.persistence.NamedQuery;
import javax.persistence.Table;

import org.hibernate.annotations.Immutable;

import com.podk.constants.QueryNames;

@Entity
@Table(name = "`fileType`")
@NamedQuery(name = QueryNames.FILETYPE_FINDALL, query = "SELECT a FROM FileType a ORDER BY upper(a.type)")
@Immutable
@Cacheable
public class FileType extends Type {
}

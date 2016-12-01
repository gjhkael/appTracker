package com.podk.persistence.dao;

import javax.transaction.Transactional;

import com.podk.persistence.entity.ContactType;

@Transactional
public interface ContactTypeDao extends BaseDao<ContactType, Integer> {
}

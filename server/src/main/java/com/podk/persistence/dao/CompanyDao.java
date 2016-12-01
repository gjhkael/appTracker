package com.podk.persistence.dao;

import javax.transaction.Transactional;

import com.podk.persistence.entity.Company;

@Transactional
public interface CompanyDao extends BaseDao<Company, Integer> {
}

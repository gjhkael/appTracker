package com.podk.persistence.dao;

import com.podk.persistence.entity.Application;
import javax.transaction.Transactional;

@Transactional
public interface ApplicationDao extends BaseDao<Application, Integer> {
}

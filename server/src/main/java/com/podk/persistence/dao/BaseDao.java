package com.podk.persistence.dao;

import java.io.Serializable;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;
import com.podk.persistence.entity.Identifiable;

@NoRepositoryBean
public interface BaseDao<T extends Identifiable, ID extends Serializable> extends CrudRepository<T, ID> {
}

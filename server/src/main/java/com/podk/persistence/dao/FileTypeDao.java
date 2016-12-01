package com.podk.persistence.dao;

import javax.transaction.Transactional;

import com.podk.persistence.entity.FileType;

@Transactional
public interface FileTypeDao extends BaseDao<FileType, Integer> {
}

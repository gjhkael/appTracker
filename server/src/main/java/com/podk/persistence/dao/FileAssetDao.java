package com.podk.persistence.dao;

import javax.transaction.Transactional;

import com.podk.persistence.entity.FileAsset;

@Transactional
public interface FileAssetDao extends BaseDao<FileAsset, Integer> {
}

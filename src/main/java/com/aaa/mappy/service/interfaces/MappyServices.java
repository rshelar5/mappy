package com.aaa.mappy.service.interfaces;

import com.aaa.mappy.pojo.Mapping;

public interface MappyServices {
/*
 *  CRUD Mapping
 * 
 * */
	public long createMapping(Mapping mapping);
	
	public Mapping getMapping(long id);
	
	public Mapping updateMapping(Mapping mapping) ;

	public void deleteMapping(long id) ;
	
}

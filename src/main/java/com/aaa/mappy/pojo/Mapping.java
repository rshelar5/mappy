package com.aaa.mappy.pojo;

import java.util.HashMap;
import java.util.Map;

/*What is mapping ?
 * One string that will represent a row from the xlxs / csv 
 * Name         | FullName                        |   Age     |       Phone        | 
 * Primary Key  | FullName = Rohan Prakash Shelar | Age = 31  | Phone = 9595665959 | 
 * */

public class Mapping {

	private final String cas;
	private final Map<DataKeys, String> data;

	Mapping(String cas) {
		this.cas = cas;
		this.data = new HashMap<>();
	}

	public String getCas() {
		return cas;
	}

	public String getValue(DataKeys key) {

		if (this.data.containsKey(key))
			return this.data.get(key);
		else
			throw new RuntimeException("Value not found for key : "+ key);

	}

	void addData(DataKeys key, String value){
		this.data.put(key, value);
	}

}

package com.aaa.mappy.pojo;

public class HasmatMapping extends Mapping{

    String name;
    String hasmat_classification;
    
    HasmatMapping(String cas) {
        super(cas);
    }
   
    
    @Override
    public String getCas() {
        return super.getCas();
    }
    public String getName(){
     return this.name;

    }
}

package com.example.demo.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.entity.FoodCategory;
import com.example.demo.persistance.FoodCategoryJPAInterfaceRepository;

@Service
public class FoodCategoryServiceImplementations implements FoodCategoryServicedeclarations {
private FoodCategoryJPAInterfaceRepository fc;
@Autowired
public FoodCategoryServiceImplementations(FoodCategoryJPAInterfaceRepository fc) {
	this.fc = fc;
}

@Override
@Transactional
public List<FoodCategory> fetchAll() {
	
	return fc.findAll();
}

@Override
@Transactional
public FoodCategory fetchById(int fc_id) {
	FoodCategory h = fc.findById(fc_id).get();
	return h;
}
@Override
@Transactional
public void insorup(FoodCategory foodcategory) {
	fc.save(foodcategory);
	
}

@Override
@Transactional
public void delete(int fc_id) {
	fc.deleteById(fc_id);	
}
}

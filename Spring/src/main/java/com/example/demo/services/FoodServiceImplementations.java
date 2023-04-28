 package com.example.demo.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.example.demo.entity.Food;

import com.example.demo.persistance.FoodJPAInterfaceRepository;

@Service
public class FoodServiceImplementations implements FoodServicedeclarations {
private FoodJPAInterfaceRepository fimp;
@Autowired
public FoodServiceImplementations(FoodJPAInterfaceRepository fimp) {
	this.fimp = fimp;
}

@Override
@Transactional
public List<Food> fetchAll() {
	
	return fimp.findAll();
}

@Override
@Transactional
public Food fetchById(int f_id) {
	Food h = fimp.findById(f_id).get();
	return h;
}
@Override
@Transactional
public void insorup(Food food) {
	fimp.save(food);
	
}

@Override
@Transactional
public void delete(int f_id) {
	fimp.deleteById(f_id);	
}
@Override
@Transactional
public List<Food> search(String data) {
	return fimp.findFood(data);
}
@Override
@Transactional
public List<Food> searchca(int data) {
	return fimp.findFoodd(data);
}
}



package com.example.demo.services;

import java.util.List;

import com.example.demo.entity.Food;
public interface FoodServicedeclarations {
	public List<Food> fetchAll();
	public Food fetchById(int f_id);
	public void insorup(Food food);
	public void delete(int f_id);
	public List<Food> search(String data);
	public List<Food> searchca(int data);
	
}

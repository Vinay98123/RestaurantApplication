package com.example.demo.services;

import java.util.List;

import com.example.demo.entity.FoodCategory;

public interface FoodCategoryServicedeclarations {
	public List<FoodCategory>fetchAll();
	public FoodCategory fetchById(int fc_id);

	public void insorup(FoodCategory foodcategory);
	public void delete(int fc_id);
	
	
}

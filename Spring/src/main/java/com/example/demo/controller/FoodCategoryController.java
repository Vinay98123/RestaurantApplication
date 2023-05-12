 package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.entity.FoodCategory;
import com.example.demo.services.FoodCategoryServiceImplementations;
@RestController
@RequestMapping("/Display")
public class FoodCategoryController 
{
private FoodCategoryServiceImplementations fc;
@Autowired
 public FoodCategoryController(FoodCategoryServiceImplementations fc) {
	 this.fc=fc;
 }
  @GetMapping("/FoodCategory")    
  public List<FoodCategory> displayAll(){
	  return fc.fetchAll();
  }
  @GetMapping("/FoodCategory/{fc_id}")
  public FoodCategory receiveById(@PathVariable int fc_id) {
	  FoodCategory h= fc.fetchById(fc_id);
	  if(fc==null)
		  throw new RuntimeException("FoodCategory data not existed with this id:"+fc_id);
	      return h;      
}
  @PostMapping("/FoodCategory")
  public void addHotel(@RequestBody FoodCategory foodcategory) {
	  foodcategory.setFc_id(0);
	  fc.insorup(foodcategory);
  }
  @PutMapping("/FoodCategory")
  public void updateHotel(@RequestBody FoodCategory foodcategory) {
	  fc.insorup(foodcategory);
	  }
  @DeleteMapping("/FoodCategory/{foodcategoryId}")
  public String deleteOnId(@PathVariable int foodcategoryId) {
	  FoodCategory h = fc.fetchById(foodcategoryId);
	  if(h==null)
		  throw new RuntimeException("FoodCategory data not existed to delete:"+foodcategoryId);
	  fc.delete(foodcategoryId);
	      return "Deleted FoodCategory id is :"+foodcategoryId;
  }
}

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

import com.example.demo.entity.Food;
import com.example.demo.services.FoodServiceImplementations;
@RestController
@RequestMapping("/Display")
public class FoodController 
{
private FoodServiceImplementations f;
@Autowired
 public FoodController(FoodServiceImplementations f) {
	 this.f=f;
 }
  @GetMapping("/Food")    
  public List<Food> displayAll(){
	  return f.fetchAll();
  }
  @GetMapping("/Food/{f_id}")
  public Food receiveById(@PathVariable int f_id) {
	  Food h= f.fetchById(f_id);
	  if(h==null)
		  throw new RuntimeException("Food data not existed with this id:"+f_id);
	      return h;}
  
	      @PostMapping("/Food")
	      public void addHotel(@RequestBody Food food) {
	    	  food.setF_id(0);
	    	  f.insorup(food);
	      }
	      @PutMapping("/Food")
	      public void updateHotel(@RequestBody Food food) {
	    	  f.insorup(food);
	    	  }
	      @DeleteMapping("/Food/{foodId}")
	      public void deleteOnId(@PathVariable int foodId) {
//	    	  Food h = f.fetchById(foodId);
//	    	  if(h==null)
//	    		  throw new RuntimeException("Food data not existed to delete:"+foodId);
//	    	   
	    	  f.delete(foodId);
	    	    
	      }
	      @GetMapping("/Search/{data}")
	      public List<Food> searchAll(@PathVariable String data){
	  		List<Food> flist = f.search(data);
	  		return flist;
	  	}
	      
	      
	      @GetMapping("/Searchca/{data}")
	      public List<Food> searchcategory(@PathVariable int data){
		  		List<Food> flist = f.searchca(data);
		  		return flist;
}
}
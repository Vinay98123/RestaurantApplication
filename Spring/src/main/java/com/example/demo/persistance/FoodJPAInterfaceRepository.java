package com.example.demo.persistance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.demo.entity.Food;
@RepositoryRestResource
public interface FoodJPAInterfaceRepository extends JpaRepository<Food, Integer> {
	@Query("select f from Food f where f_name = ?1 ")
	public List<Food> findFood(String data);
	@Query("select f from Food f where fc_id = ?1 ")
	public List<Food> findFoodd(int data);
}
  
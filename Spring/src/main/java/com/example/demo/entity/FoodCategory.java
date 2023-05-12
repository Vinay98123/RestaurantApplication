package com.example.demo.entity;

import java.util.Set;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="foodcategory")
public class FoodCategory {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="fc_id")
private int fc_id;
@Column(name="fc_name")
private String fc_name;

@OneToMany(mappedBy = "fc")   
private Set<Food>
foods;



public FoodCategory() {

}
public FoodCategory(int fc_id, String fc_name) {
	this.fc_id = fc_id;
	this.fc_name = fc_name;
}

public int getFc_id() {
	return fc_id;
}
public void setFc_id(int fc_id) {
	this.fc_id = fc_id;
}
public String getFc_name() {
	return fc_name;
}
public void setFc_name(String fc_name) {
	this.fc_name = fc_name;
}
@Override
public String toString() {
	return "FoodController [fc_id=" + fc_id + ", fc_name=" + fc_name + "]";
}



}
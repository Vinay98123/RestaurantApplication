package com.example.demo.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="food")
public class Food {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="f_id")
private int f_id ;
@Column(name="f_name")
private String f_name;
@Column(name="f_img")
private String f_img;
@Column(name="f_price")
private int f_price;
@Column(name="f_desc")
private String f_desc;
@Column(name="fc_id")
private int fc_id; 


@ManyToOne(targetEntity=FoodCategory.class,fetch = FetchType.EAGER) 
@JoinColumn(name="fc_id",insertable = false, updatable = false)
private FoodCategory fc;
public Food() {	
	// TODO Auto-generated constructor stub
}
public Food(int f_id, String f_name, String f_img, int f_price,String f_desc, int fc_id) {
	super();
	this.f_id = f_id;
	this.f_name = f_name;
	this.f_img = f_img;
	this.f_price = f_price;
	this.f_desc = f_desc;
	this.fc_id = fc_id;
}
public int getF_id() {
	return f_id;
}
public void setF_id(int f_id) {
	this.f_id = f_id;
}
public String getF_name() {
	return f_name;
}
public void setF_name(String f_name) {
	this.f_name = f_name;
}
public String getF_img() {
	return f_img;
}
public void setF_img(String f_img) {
	this.f_img = f_img;
}
public int getF_price() {
	return f_price;
}
public void setF_price(int f_price) {
	this.f_price = f_price;
}
public String getF_desc() {
	return f_desc;
}
public void setF_desc(String f_desc) {
	this.f_desc = f_desc;
}
public int getFc_id() {
	return fc_id;
}
public void setFc_id(int fc_id) {
	this.fc_id = fc_id;
	
}
@Override
public String toString() {
	return "Food [f_id=" + f_id + ", f_name=" + f_name + ", f_img=" + f_img + ", f_price=" + f_price + ", f_desc="
			+ f_desc + ", fc_id=" + fc_id + "]";
}

}

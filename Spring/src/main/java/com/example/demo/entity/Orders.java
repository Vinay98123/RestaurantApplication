package com.example.demo.entity;
import javax.persistence.Column;
import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;

import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="orders")
public class Orders {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="o_id")
private int o_id;
@Column(name="f_id")
private int f_id;
@Column(name="f_name")
private String f_name;
@Column(name="u_id")
private int u_id;
@Column(name="f_img")
private String f_img;
@Column(name="f_price")
private int f_price;
@Column(name="f_desc")
private String f_desc;
@Column(name="quantity")
private int quantity;
@OneToOne(targetEntity=Food.class)
@JoinColumn(name="f_id",insertable = false,updatable = false)
private Food food;
@OneToOne(targetEntity=User.class)
@JoinColumn(name="u_id",insertable = false,updatable = false)
private User user;

public Orders() {

}

public Orders(int o_id, int f_id, String f_name, int u_id, String f_img, int f_price, String f_desc, int quantity,
		Food food, User user) {
	super();
	this.o_id = o_id;
	this.f_id = f_id;
	this.f_name = f_name;
	this.u_id = u_id;
	this.f_img = f_img;
	this.f_price = f_price;
	this.f_desc = f_desc;
	this.quantity = quantity;
	this.food = food;
	this.user = user;
}

public int getO_id() {
	return o_id;
}

public void setO_id(int o_id) {
	this.o_id = o_id;
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

public int getU_id() {
	return u_id;
}

public void setU_id(int u_id) {
	this.u_id = u_id;
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

public int getQuantity() {
	return quantity;
}

public void setQuantity(int quantity) {
	this.quantity = quantity;
}

public Food getFood() {
	return food;
}

public void setFood(Food food) {
	this.food = food;
}

public User getUser() {
	return user;
}

public void setUser(User user) {
	this.user = user;
}

@Override
public String toString() {
	return "Orders [o_id=" + o_id + ", f_id=" + f_id + ", f_name=" + f_name + ", u_id=" + u_id + ", f_img=" + f_img
			+ ", f_price=" + f_price + ", f_desc=" + f_desc + ", quantity=" + quantity + ", food=" + food + ", user="
			+ user + "]";
}

}
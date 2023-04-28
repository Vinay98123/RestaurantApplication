package com.example.demo.entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
@Column(name="u_id")
private int u_id;
@Column(name="u_name")
private String u_name;
@Column(name="u_pass")
private String u_pass;
@Column(name="u_email")
private String u_email;
@Column(name="u_phno")
private long u_phno;
@Column(name="u_type")
private String u_type;
public User() {
	
}
public User(int u_id, String u_name, String u_pass, String u_email, long u_phno, String u_type) {
	super();
	this.u_id = u_id;
	this.u_name = u_name;
	this.u_pass = u_pass;
	this.u_email = u_email;
	this.u_phno = u_phno;
	this.u_type = u_type;
}
public int getU_id() {
	return u_id;
}
public void setU_id(int u_id) {
	this.u_id = u_id;
}
public String getU_name() {
	return u_name;
}
public void setU_name(String u_name) {
	this.u_name = u_name;
}
public String getU_pass() {
	return u_pass;
}
public void setU_pass(String u_pass) {
	this.u_pass = u_pass;
}
public String getU_email() {
	return u_email;
}
public void setU_email(String u_email) {
	this.u_email = u_email;
}
public long getU_phno() {
	return u_phno;
}
public void setU_phno(long u_phno) {
	this.u_phno = u_phno;
}
public String getU_type() {
	return u_type;
}
public void setU_type(String u_type) {
	this.u_type = u_type;
}
@Override
public String toString() {
	return "User [u_id=" + u_id + ", u_name=" + u_name + ", u_pass=" + u_pass + ", u_email=" + u_email + ", u_phno="
			+ u_phno + ", u_type=" + u_type + "]";
}

}

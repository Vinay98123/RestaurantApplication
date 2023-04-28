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
import com.example.demo.entity.User;
import com.example.demo.services.UserServiceImplementations;
@RestController
@RequestMapping("/Display")
public class UserController 
{
private UserServiceImplementations u;
@Autowired
 public UserController(UserServiceImplementations u) {
	 this.u=u;
 }
  @GetMapping("/User")    
  public List<User> displayAll(){
	  return u.fetchAll();
  }
  @GetMapping("/User/{u_id}")
  public User receiveById(@PathVariable int u_id) {
	  User h= u.fetchById(u_id);
	  if(h==null)
		  throw new RuntimeException("User data not existed with this id:"+u_id);
	      return h;      
}
  @PostMapping("/User")
  public void addHotel(@RequestBody User user) {
	  user.setU_id(0);
	  u.insorup(user);
  }
  @PutMapping("/User")
  public void updateHotel(@RequestBody User user) {
	  u.insorup(user);
	  }
  @DeleteMapping("/User/{userId}")
  public String deleteOnId(@PathVariable int userId) {
	  User h = u.fetchById(userId);
	  if(h==null)
		  throw new RuntimeException("User data not existed to delete:"+userId);
	  u.delete(userId);
	      return "Deleted User id is :"+userId;
  }

}

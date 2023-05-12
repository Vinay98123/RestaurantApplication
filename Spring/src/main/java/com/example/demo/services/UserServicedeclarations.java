package com.example.demo.services;

import java.util.List;
import com.example.demo.entity.User;

public interface UserServicedeclarations {
	public List<User>fetchAll();
	public User fetchById(int u_id);
	public void insorup(User user);
	public void delete(int u_id);
}

package com.example.demo.services;
import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.entity.User;
import com.example.demo.persistance.UserJPAInterfaceRepository;

@Service
public class UserServiceImplementations implements UserServicedeclarations {
private UserJPAInterfaceRepository u;
@Autowired
public UserServiceImplementations(UserJPAInterfaceRepository u) {
	this.u = u;
}

@Override
@Transactional
public List<User> fetchAll() {
	
	return u.findAll();
}

@Override
@Transactional
public User fetchById(int u_id) {
	User h = u.findById(u_id).get();
	return h;
}
@Override
@Transactional
public void insorup(User user) {
	u.save(user);
	
}

@Override
@Transactional
public void delete(int u_id) {
	u.deleteById(u_id);	
}
}

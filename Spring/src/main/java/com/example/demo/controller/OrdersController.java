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
import com.example.demo.entity.Orders;
import com.example.demo.services.OrdersServiceImplementations;

@RestController
@RequestMapping("/Display")
public class OrdersController {
	private OrdersServiceImplementations o;

	@Autowired
	public OrdersController(OrdersServiceImplementations o) {
		this.o = o;
	}

	@GetMapping("/Orders")
	public List<Orders> displayAll() {
		return o.fetchAll();
	}

	@GetMapping("/Orders/{o_id}")
	public Orders receiveById(@PathVariable int o_id) {
		Orders h = o.fetchById(o_id);
		if (h == null)
			throw new RuntimeException("Orders data not existed with this id:" + o_id);
		return h;
	}
	@GetMapping("/user/{u_id}")
	public List<Orders> getuser(@PathVariable int u_id){
		List<Orders> lo = o.byid(u_id);
		return lo;
	}
	
	@PostMapping("/Orders")
	public void addHotel(@RequestBody Orders orders) {
		orders.setO_id(0);
		o.insorup(orders);
	}

	@PutMapping("/Orders")
	public void updateHotel(@RequestBody Orders orders) {
		o.insorup(orders);
	}

	@DeleteMapping("/Orders/{ordersId}")
	public String deleteOnId(@PathVariable int ordersId) {
//		Orders h = o.fetchById(ordersId);
//		if (h == null)
//			throw new RuntimeException("Food data not existed to delete:" + ordersId);
		o.delete(ordersId);
		return "Deleted Food id is :" + ordersId;
	}
	@GetMapping("/count/{u_id}")
	public int getCount(@PathVariable int u_id) {
		return o.Count(u_id);
	}
	 
	@GetMapping("/search/{data}")
    public List<Orders> searchAll(@PathVariable String data){
		List<Orders> olist = o.search(data);
		return olist;
	}

}

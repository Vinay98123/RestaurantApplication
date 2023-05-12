package com.example.demo.services;

import java.util.List;

import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.example.demo.entity.Orders;
import com.example.demo.persistance.OrdersJPAInterfaceRepository;

@Service
public class OrdersServiceImplementations implements OrdersServicedeclarations {
	private OrdersJPAInterfaceRepository o;

	@Autowired
	public OrdersServiceImplementations(OrdersJPAInterfaceRepository o) {
		this.o = o;
	}

	@Override
	@Transactional
	public List<Orders> fetchAll() {

		return o.findAll();
	}

	@Override
	@Transactional
	public Orders fetchById(int o_id) {
		Orders h = o.findById(o_id).get();
		return h;
	}

	@Override
	@Transactional
	public void insorup(Orders order) {
		o.save(order);

	}

	@Override
	@Transactional
	public void delete(int o_id) {
		o.deleteById(o_id);
	}

	@Override
	public List<Orders> byid(int u_id) {
		return o.findAllByu_id(u_id);
	}

	@Override
	public int Count(int u_id) {
		
		return o.getCount(u_id);
	}
	@Override
	@Transactional
	public List<Orders> search(String data) {
		return o.findOrders(data);
	}

}

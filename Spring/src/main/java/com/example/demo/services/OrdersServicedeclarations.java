package com.example.demo.services;

import java.util.List;


import com.example.demo.entity.Orders;

public interface OrdersServicedeclarations {
	public List<Orders>fetchAll();
	public Orders fetchById(int o_id);
	public void insorup(Orders orders);
	public void delete(int o_id);
    public List<Orders> byid(int u_id);
    public int Count(int u_id);
    public List<Orders> search(String data);
}

package com.example.demo.persistance;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


import com.example.demo.entity.Orders;
@RepositoryRestResource
public interface OrdersJPAInterfaceRepository extends JpaRepository<Orders, Integer> {

@Query(value="select o from Orders o where u_id=?1")
public List<Orders> findAllByu_id(int u_id);
@Query(value="select count(o)from Orders o where u_id=?1")
public int getCount(int u_id);
@Query("select o from Orders o where o_name = ?1 ")
public List<Orders> findOrders(String data);
}
package com.example.demo.persistance;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import com.example.demo.entity.User;
@RepositoryRestResource
public interface UserJPAInterfaceRepository extends JpaRepository<User, Integer> {

}

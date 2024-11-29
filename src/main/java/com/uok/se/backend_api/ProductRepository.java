package com.uok.se.backend_api;

//A Spring Data interface that provides methods to interact with the database (like saving, updating, and deleting records).
import org.springframework.data.jpa.repository.JpaRepository;
//An annotation that tells Spring that this interface is a repository, which is used for data access.
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer> {

}

package com.stackroute.productservice.repository;

import com.stackroute.productservice.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends MongoRepository<Product,String> {

    boolean existsByProductId(String productId);

    List<Product> findBySellerEmail(String sellerEmail);
}

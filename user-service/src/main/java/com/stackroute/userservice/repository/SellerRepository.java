package com.stackroute.userservice.repository;

import com.stackroute.userservice.model.Seller;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface SellerRepository extends MongoRepository<Seller, String> {

    Optional<Seller> findSellerByEmail(String email);
}

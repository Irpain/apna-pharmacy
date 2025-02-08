package com.stackroute.userservice.repository;

import com.stackroute.userservice.model.Buyer;
import com.stackroute.userservice.model.Seller;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BuyerRepository extends MongoRepository<Buyer, String> {
    Optional<Buyer> findBuyerByEmail(String email);
}

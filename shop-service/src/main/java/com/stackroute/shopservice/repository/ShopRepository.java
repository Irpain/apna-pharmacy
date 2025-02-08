package com.stackroute.shopservice.repository;

import com.stackroute.shopservice.entity.Shop;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShopRepository extends MongoRepository<Shop,String> {
    Shop findBySellerEmail(String sellerEmail);

    boolean existsByShopId(String shopId);
}

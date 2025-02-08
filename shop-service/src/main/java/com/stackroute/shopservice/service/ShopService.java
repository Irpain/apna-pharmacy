package com.stackroute.shopservice.service;

import com.stackroute.shopservice.entity.Shop;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ShopService {
    public Shop addShop(Shop shop) ;

    List<Shop> getAllShop();

    Shop getShopById(String shopId);


    String deleteProductById(String shopId);

    Shop getShopBySellerEmail(String sellerEmail);

    Shop updateShopById(Shop shop);



    String deleteShopById(String shopId);
}

package com.stackroute.shopservice.serviceImpl;

import com.stackroute.shopservice.config.Producer;
import com.stackroute.shopservice.config.ShopDTO;
import com.stackroute.shopservice.entity.Shop;
import com.stackroute.shopservice.exception.IdNotFoundException;
import com.stackroute.shopservice.exception.ShopNotFoundException;
import com.stackroute.shopservice.repository.ShopRepository;
import com.stackroute.shopservice.service.ShopService;
import lombok.extern.slf4j.Slf4j;
import org.bson.BsonBinarySubType;
import org.bson.types.Binary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
@Slf4j
public class ShopServiceImpl implements ShopService {

    @Autowired
    ShopRepository Repository;

    @Autowired
    Producer producer;

    @Override
    public Shop addShop(Shop shop) {
        ShopDTO shopDTO = new ShopDTO();
        shopDTO.setShopCity(shop.getShopCity());
        shopDTO.setShopImage(shop.getShopImage());
        shopDTO.setShopId(shop.getShopId());
        shopDTO.setShopDescription(shop.getShopDescription());
        shopDTO.setShopAddress(shop.getShopAddress());
        shopDTO.setSellerEmail(shop.getSellerEmail());
        shopDTO.setShopName(shop.getShopName());
        shopDTO.setLocationLink(shop.getLocationLink());
        Shop savedShop = Repository.save(shop);
        producer.sendMessageToRabbitMq(shopDTO);
        return savedShop;
    }

    @Override
    public List<Shop> getAllShop() {
        return Repository.findAll();
    }
    @Override
    public Shop getShopById(String shopId) {
        Optional<Shop> shopFromRepo = Repository.findById(shopId);
        if (shopFromRepo.isPresent()) {
            return shopFromRepo.get();
        } else {
            throw new IdNotFoundException("SERVICE.SHOP_NOT_FOUND");
        }
    }

    @Override
    public String deleteProductById(String shopId) {
        return null;
    }


    @Override
    public String deleteShopById(String shopId) {
        if (!Repository.existsById(shopId)) {
            throw new IdNotFoundException("SERVICE.SHOP_NOT_FOUND");
        }
        Repository.deleteById(shopId);
        return "Shop deleted successfully";
    }


    @Override
    public Shop getShopBySellerEmail(String sellerEmail) {
        return Repository.findBySellerEmail(sellerEmail);
    }

    @Override
    public Shop updateShopById(Shop shop) {
        Optional<Shop> shopDb = Repository.findById(shop.getShopId());
        Shop updatedShop = null;
        if (shopDb.isPresent()) {
            Shop shopFromRepo = shopDb.get();
            shopFromRepo.setShopName(shop.getShopName());
            shopFromRepo.setSellerEmail(shop.getSellerEmail());
            shopFromRepo.setShopAddress(shop.getShopAddress());
            shopFromRepo.setShopDescription(shop.getShopDescription());


            updatedShop = Repository.save(shopFromRepo);
        } else {
            throw new IdNotFoundException("SERVICE.SHOP_NOT_FOUND");
        }

        return updatedShop;
    }


}

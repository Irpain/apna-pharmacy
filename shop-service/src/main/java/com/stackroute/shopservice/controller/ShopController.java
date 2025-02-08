package com.stackroute.shopservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.shopservice.entity.Shop;
import com.stackroute.shopservice.exception.ShopNotFoundException;
import com.stackroute.shopservice.service.ShopService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
@Slf4j
@RestController
@RequestMapping(value = "/shop")
@CrossOrigin("*")
public class ShopController {
    @Autowired
    ShopService service;

    @PostMapping(value = "/addshop") // localhost:8092/product/addproduct
    public ResponseEntity<Shop> addShop(@RequestParam("shop") String product, @RequestParam("file") MultipartFile image) throws IOException {
//        template.convertAndSend(ProducerConfig.EXCHANGE1,ProducerConfig.ROUTING_KEY1, product);


        ObjectMapper objectMapper=new ObjectMapper();
        Shop shop1 =objectMapper.readValue(product,Shop.class);
        shop1.setShopImage(image.getBytes());

        return new ResponseEntity<>(service.addShop(shop1), HttpStatus.CREATED);

    }


        @GetMapping(value = "/shops") // localhost:8092/product/products
    public ResponseEntity<List<Shop>> getAllShop() {
        return new ResponseEntity<List<Shop>>(service.getAllShop(), HttpStatus.OK);
    }

    @GetMapping(value = "/shop/{shopId}") // localhost:8092/product/product/{productId}
    public ResponseEntity<Shop> getShopById(@PathVariable String shopId) {
        return new ResponseEntity<Shop>(service.getShopById(shopId), HttpStatus.OK);
    }

    @GetMapping(value = "/getbyemail/{sellerEmail}") // localhost:8092/product/getbyemail/{sellerEmail}
    public ResponseEntity getShopBySellerEmail(@PathVariable String sellerEmail) {
        return new ResponseEntity(service.getShopBySellerEmail(sellerEmail), HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteshop/{shopId}") // localhost:8092/product/deleteproduct/{productId}
    public ResponseEntity<String> deleteShopById(@PathVariable String shopId) {
        return new ResponseEntity<String>(service.deleteShopById(shopId), HttpStatus.OK);
    }

    @PutMapping(value = "/updateshop") // localhost:8092/product/updateproduct
    public ResponseEntity<Shop> updateShopById(@RequestBody Shop shop) {
        return new ResponseEntity<Shop>(service.updateShopById(shop), HttpStatus.OK);
    }
}

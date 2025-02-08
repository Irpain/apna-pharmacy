package com.stackroute.productservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.stackroute.productservice.entity.Product;

import com.stackroute.productservice.service.ProductService;
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
@RequestMapping("/product")
@CrossOrigin("http://localhost:4200")
public class ProductController {
    @Autowired
    ProductService service;

    @PostMapping(value = "/addproduct") // localhost:8092/product/addproduct
    public ResponseEntity<Product> addProduct(@RequestParam("product") String product, @RequestParam("file") MultipartFile image) throws IOException {
//        template.convertAndSend(ProducerConfig.EXCHANGE1,ProducerConfig.ROUTING_KEY1, product);


        ObjectMapper objectMapper=new ObjectMapper();
        Product product1 =objectMapper.readValue(product,Product.class);
        product1.setProductImage(image.getBytes());

        return new ResponseEntity<>(service.addProduct(product1), HttpStatus.CREATED);


    }
    //    @PostMapping(value="/addimage/{productId}")//localhost:8092/product/addimage/{productId}9
//    public ResponseEntity<Object> addProductImage(@PathVariable String productId, @RequestBody(required = true) MultipartFile multipartFile) throws ProductNotFoundException {
//        ResponseEntity<Object> responseEntity;
//        log.info("In controlller class to Add Info");
//
//        Product productFromService= (Product) service.addProductImage(productId,multipartFile);
//        responseEntity = new ResponseEntity<Object>(productFromService, HttpStatus.OK);
//        return responseEntity;
//    }
    @GetMapping(value = "/products") // localhost:8092/product/products
    public ResponseEntity<List<Product>> getAllProduct() {
        return new ResponseEntity<List<Product>>(service.getAllProduct(), HttpStatus.OK);
    }

    @GetMapping(value = "/{productId}") // localhost:8092/product/product/{productId}
    public ResponseEntity<Product> getProductById(@PathVariable String productId) {
        return new ResponseEntity<Product>(service.getProductById(productId), HttpStatus.OK);
    }

    @GetMapping(value = "/getbyemail/{sellerEmail}") // localhost:8092/product/getbyemail/{sellerEmail}
    public ResponseEntity<List<Product>> getProductBySellerEmail(@PathVariable String sellerEmail) {
        return new ResponseEntity<List<Product>>(service.getProductBySellerEmail(sellerEmail), HttpStatus.OK);
    }

    @DeleteMapping(value = "/deleteproduct/{productId}") // localhost:8092/product/deleteproduct/{productId}
    public ResponseEntity<String> deleteProductById(@PathVariable String productId) {
        return new ResponseEntity<String>(service.deleteProductById(productId), HttpStatus.OK);
    }

    @PutMapping(value = "/updateproduct") // localhost:8092/product/updateproduct
    public ResponseEntity<Product> updateProductById(@RequestBody Product product) {
        return new ResponseEntity<Product>(service.updateProductById(product), HttpStatus.OK);
    }

}

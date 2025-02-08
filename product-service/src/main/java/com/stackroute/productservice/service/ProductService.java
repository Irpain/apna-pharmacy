package com.stackroute.productservice.service;

import com.stackroute.productservice.entity.Product;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface ProductService {
    public Product addProduct(Product product) ;

    List<Product> getAllProduct();

    Product getProductById(String productId);

    String deleteProductById(String productId);

    List<Product> getProductBySellerEmail(String sellerEmail);

    Product updateProductById(Product product);

//    Object addProductImage(String productId, MultipartFile multipartFile);
}

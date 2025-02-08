package com.stackroute.productservice.config;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.UUID;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ProductDTO {
    private String productId = UUID.randomUUID().toString();
    private String productName;
    private int productPrice;
    private String productDescription;
    private byte[] productImage;
    private String sellerEmail;
    private String productCategory;
    private String productBrand;
}

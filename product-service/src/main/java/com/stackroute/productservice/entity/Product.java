package com.stackroute.productservice.entity;

import lombok.*;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


import java.util.UUID;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "Products")
public class Product {

    @Id
    private String productId = UUID.randomUUID().toString();
    private String productName;
    private int productPrice;
    private String productDescription;
    private byte[] productImage;
    private String sellerEmail;
    private String productCategory;
    private String productBrand;

}

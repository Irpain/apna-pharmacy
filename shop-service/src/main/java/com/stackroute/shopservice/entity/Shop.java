package com.stackroute.shopservice.entity;

import lombok.*;
import org.bson.types.Binary;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
@Data
@Document(collection = "Shops")
public class Shop {
    @Id
    private String shopId = UUID.randomUUID().toString();
    private String shopName;
    private String shopAddress;
    private String shopCity;
    private byte[] shopImage;
    private String sellerEmail;
    private String shopDescription;
    private String locationLink;
}

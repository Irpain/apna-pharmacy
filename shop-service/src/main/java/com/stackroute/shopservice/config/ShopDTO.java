package com.stackroute.shopservice.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

import java.util.UUID;

@Setter
@Getter
@Configuration
@ConfigurationProperties("rabbitmq")
public class ShopDTO {
    private  String shopId;
    private String shopName;
    private String shopAddress;
    private String shopCity;
    private byte[] shopImage;
    private String sellerEmail;
    private String shopDescription;
    private String locationLink;
}

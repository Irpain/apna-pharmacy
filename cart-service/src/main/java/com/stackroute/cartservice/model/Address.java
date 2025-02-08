package com.stackroute.cartservice.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Field;

@Data
@Setter
@Getter
@AllArgsConstructor
public class Address {

    private String doorNo;
    private String streetName;
    private String landMark;
    private String city;
    private String state;
    private int pinCode;
}

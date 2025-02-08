package com.stackroute.userservice.model;


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
    @Field(name = "DoorNo")
    private String doorNo;
    @Field(name = "StreetName")
    private String streetName;
    @Field(name = "LandMark")
    private String landMark;
    @Field(name = "City")
    private String city;
    @Field(name = "State")
    private String state;
    @Field(name = "PinCode")
    private int pinCode;
}

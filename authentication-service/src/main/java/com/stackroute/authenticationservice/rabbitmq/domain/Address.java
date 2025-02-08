package com.stackroute.authenticationservice.rabbitmq.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;


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

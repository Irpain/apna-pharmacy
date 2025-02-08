package com.stackroute.userservice.model;

import lombok.*;

import org.springframework.data.annotation.Id;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


@Data
@Document
@NoArgsConstructor
@Getter
@Setter
public class Buyer {


    @Id
    @Field(name = "Email")
    private String email;

    @Field(name = "FullName")
    private String fullName;

    //    @Indexed(unique = true)
    @Field(name = "Contact")
    private String number;
    @Field(name = "Address")
    private Address address;
    @Field(name = "password")
    private String password;
    @Field(name = "role")
    private String role;

    public void setRole(String role) {
        this.role = role;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Buyer(String fullName, String email, String number, String password) {
        this.fullName = fullName;
        this.email = email;
        this.number = number;
        this.password = password;

    }
}

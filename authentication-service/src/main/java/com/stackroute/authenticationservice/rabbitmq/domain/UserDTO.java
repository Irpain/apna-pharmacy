package com.stackroute.authenticationservice.rabbitmq.domain;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class UserDTO {
    public String email;
    public String password;
    public String role;
    public String fullName;
    public String number;
    public Address address;

    public  UserDTO() {
    }

}


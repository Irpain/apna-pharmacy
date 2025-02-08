package com.stackroute.userservice.rabbitmq.domain;

import com.stackroute.userservice.model.Address;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Setter
@Configuration
@ConfigurationProperties("rabbitmq")
public class UserDTO {
    public String email;
    public String password;
    public String role;
    public String fullName;
    public String number;
    public Address address;

    public  UserDTO() {
    }

    public String getEmail() {
        return email;
    }
    public String getPassword() {
        return password;
    }
    public String getRole() {
        return role;
    }
}

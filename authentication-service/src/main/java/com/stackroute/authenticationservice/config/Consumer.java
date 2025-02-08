package com.stackroute.authenticationservice.config;

import com.stackroute.authenticationservice.exception.UserAlreadyExistsException;
import com.stackroute.authenticationservice.model.User;
import com.stackroute.authenticationservice.rabbitmq.domain.UserDTO;
import com.stackroute.authenticationservice.service.JwtUserDetailsService;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private JwtUserDetailsService userService;

    @RabbitListener(queues = "user_queue1")
    public void getUserDtoFromRabbitMq(UserDTO userDTO) throws UserAlreadyExistsException {
        System.out.println(userDTO.toString());
        User user = new User();
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setRole(userDTO.getRole());
        userService.save(user);
    }
}

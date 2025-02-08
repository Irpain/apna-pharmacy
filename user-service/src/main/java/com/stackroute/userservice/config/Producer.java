package com.stackroute.userservice.config;

import com.stackroute.userservice.rabbitmq.domain.UserDTO;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

@Component
public class Producer {
    private RabbitTemplate rabbitTemplate;
    private DirectExchange directExchange;


    @Autowired
    public Producer(RabbitTemplate rabbitTemplate, DirectExchange directExchange) {
        super();
        this.directExchange = directExchange;
        this.rabbitTemplate = rabbitTemplate;
    }



    public void sendMessageToRabbitMq(UserDTO userDTO) {
        rabbitTemplate.convertAndSend(directExchange.getName(), "user_routing", userDTO);
    }
}

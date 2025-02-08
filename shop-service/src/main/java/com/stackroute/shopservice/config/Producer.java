package com.stackroute.shopservice.config;


import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Producer {

    private RabbitTemplate rabbitTemplate;
    private DirectExchange directExchange;


    @Autowired
    public Producer(RabbitTemplate rabbitTemplate, DirectExchange directExchange) {
        super();
        this.rabbitTemplate = rabbitTemplate;
        this.directExchange = directExchange;
    }
    public void sendMessageToRabbitMq(ShopDTO shopDTO)
    {
        System.out.println(shopDTO.getShopCity());
        rabbitTemplate.convertAndSend(directExchange.getName(),"shop_routing",shopDTO);
    }
}

package com.stackroute.userservice.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfiguration {
    private String exchangeName = "user_exchange";
    private String registerQueue="user_queue";

    private String registerQueue1 ="user_queue1";


    @Bean
    public DirectExchange directExchange() {
        return new DirectExchange(exchangeName);

    }

    @Bean
    public Queue registerQueue(){
        return new Queue(registerQueue,false);
    }

    @Bean
    public Queue registerQueue1(){
        return new Queue(registerQueue1,false);
    }

    @Bean
    public Jackson2JsonMessageConverter producerJackson2JsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(final ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemp = new RabbitTemplate(connectionFactory);
        rabbitTemp.setMessageConverter(producerJackson2JsonMessageConverter());
        return rabbitTemp;
    }

    @Bean
    Binding bindingUser(Queue registerQueue, DirectExchange exchange)
    {
        return BindingBuilder.bind(registerQueue()).to(exchange).with("user_routing");
    }

    @Bean
    Binding bindingUser1(Queue registerQueue, DirectExchange exchange)
    {
        return BindingBuilder.bind(registerQueue1()).to(exchange).with("user_routing");
    }
}

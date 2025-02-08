package com.stackroute.authenticationservice.config;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MessageConfiguration {
    private String exchangeName = "user_exchange";
    private String registerQueue = "user_queue1";


    @Bean
    public Jackson2JsonMessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public DirectExchange directExchange() {
        return new DirectExchange(exchangeName);
    }

    @Bean
    public Queue registerQueue() {
        return new Queue(registerQueue, false);
    }

    @Bean
    Binding bindingUser(Queue registerQueue, DirectExchange directExchange) {
        return BindingBuilder.bind(registerQueue()).to(directExchange).with("user_routing");
    }
}

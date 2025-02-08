package com.stackroute.cartservice.rabbitMQConfig;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.FanoutExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ProducerConfig {

    public static final String QUEUE = "cartQueue-Payment";
    public static final String QUEUE1 = "cartQueue-Order";
    public static final String EXCHANGE = "cartExchange";
    @Bean
    public Queue producerQueue() {
        return new Queue(QUEUE);
    }
    @Bean
    public Queue producerQueue1() {
        return new Queue(QUEUE1);
    }


    @Bean
    public FanoutExchange producerExchange() {
        return new FanoutExchange(EXCHANGE);
    }


    @Bean
    public Binding producerBinding(FanoutExchange producerExchange,Queue producerQueue) {
        return BindingBuilder.bind(producerQueue).to(producerExchange);
    }

    @Bean
    public Binding producerBinding1(FanoutExchange producerExchange,Queue producerQueue1) {
        return BindingBuilder.bind(producerQueue1).to(producerExchange);
    }

}

package com.stackroute.cartservice.rabbitMQConfig;

import org.springframework.amqp.core.*;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConsumerConfig {
	private String exchangeName = "user_exchange";
	private String registerQueue = "user_queue";

	private String exchangeName1="products_exchange";

	private String registerQueue1="product_queue";



	@Bean
	public Jackson2JsonMessageConverter jsonMessageConverter() {
		return new Jackson2JsonMessageConverter();
	}

	@Bean
	public DirectExchange directExchange() {
		return new DirectExchange(exchangeName);
	}

	@Bean
	public DirectExchange directExchange1() {
		return new DirectExchange(exchangeName1);
	}

	@Bean
	public Queue registerQueue() {
		return new Queue(registerQueue, false);
	}

	@Bean
	public Queue registerQueue1() {
		return new Queue(registerQueue1, false);
	}

	@Bean
	Binding bindingUser(Queue registerQueue, DirectExchange directExchange) {
		return BindingBuilder.bind(registerQueue()).to(directExchange()).with("user_routing");
	}

	@Bean
	Binding bindingProduct(Queue registerQueue, DirectExchange directExchange1) {
		return BindingBuilder.bind(registerQueue1()).to(directExchange1()).with("product_routing");
	}


}

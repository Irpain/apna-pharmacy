package com.stackroute.cartservice.consumer;

import com.stackroute.cartservice.model.Product;
import com.stackroute.cartservice.model.ProductDto;
import com.stackroute.cartservice.model.User;
import com.stackroute.cartservice.model.UserDto;
import com.stackroute.cartservice.rabbitMQConfig.ConsumerConfig;
import com.stackroute.cartservice.serviceImpl.CartServiceImpl;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


@Component
public class Consumer {

    @Autowired
    public CartServiceImpl cartService;

    @RabbitListener(queues = "product_queue")
    public void getProductDetailsFromRabbitMQ(ProductDto productDTO) throws Exception {
        Product product = new Product();
        product.setProductId(productDTO.getProductId());
        product.setProductName(productDTO.getProductName());
        product.setProductImage(productDTO.getProductImage());
        product.setProductCategory(productDTO.getProductCategory());
        product.setProductDescription(productDTO.getProductDescription());
        product.setProductPrice(productDTO.getProductPrice());
        product.setProductBrand(productDTO.getProductBrand());
        cartService.addProduct(product);

    }

    @RabbitListener(queues = "user_queue")
    public void getUserDetailsFromRabbitMQ(UserDto userDto) throws Exception{
        User user = new User();
        user.setBuyerEmail(userDto.getEmail());
        user.setBuyerAddress(userDto.getAddress());
        user.setBuyerName(userDto.getFullName());
        cartService.save(user);
    }


}

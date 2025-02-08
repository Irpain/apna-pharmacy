package com.stackroute.apigateway.controller;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Config {
    @Bean
    public RouteLocator route(RouteLocatorBuilder builder ){
        return builder.routes().route(x->x.path("/product/**").uri("lb://product-service")).route(y->y.path("/api/Buyer/**").uri("lb://user-service")).route(z->z.path("/api/**").uri("lb://authentication-service")).build();
    }
}

package com.stackroute.authenticationservice;


import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@SpringBootApplication
@EnableEurekaClient

public class AuthenticationServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AuthenticationServiceApplication.class, args);
		}
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

//	@Bean
//	CommandLineRunner run(UserService userService) {
//		return args -> {
//			userService.saveUser(new User("irfanahamed@gmail.com","1234", "BUYER"));
//			userService.saveUser(new User("kartik@gmail","1234", "SELLER"));
//			userService.saveUser(new User("pankaj@gmail","1234", "BUYER"));
//			userService.saveUser(new User("adan@gmail","1234", "SELLER"));
//
//
//		};
//	}



}

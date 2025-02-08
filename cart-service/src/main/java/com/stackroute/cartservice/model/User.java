package com.stackroute.cartservice.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
@Document(collection = "users")
public class User {
	private String buyerEmail;
	private String buyerName;
	private String buyerNumber;
	private Address buyerAddress;


}

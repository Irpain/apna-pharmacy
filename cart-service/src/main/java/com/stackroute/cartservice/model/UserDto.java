package com.stackroute.cartservice.model;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class UserDto {
	public String email;
	public String password;
	public String role;
	public String fullName;
	public String number;
	public Address address;
}


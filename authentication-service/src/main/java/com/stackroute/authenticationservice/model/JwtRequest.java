package com.stackroute.authenticationservice.model;

import java.io.Serializable;

public class JwtRequest implements Serializable {

	private static final long serialVersionUID = 5926468583005150707L;

	private String email;
	private String password;



	private String role;

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	//default constructor for JSON Parsing
	public JwtRequest()
	{
	}

	public JwtRequest(String email, String password) {
		this.setEmail(email);
		this.setPassword(password);
		this.setRole(role);


	}


}
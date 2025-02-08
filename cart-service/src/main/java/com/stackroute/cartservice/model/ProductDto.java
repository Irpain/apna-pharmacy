package com.stackroute.cartservice.model;

import lombok.*;
import org.bson.types.Binary;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString
public class ProductDto {

	private String productId;
	private String productName;
	private int productPrice;
	private String productDescription;
	private byte[] productImage;
	private String sellerEmail;
	private String productCategory;
	private String productBrand;



}

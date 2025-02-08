package com.stackroute.cartservice.exception;

public class ProductNotFoundException extends Exception{
    public ProductNotFoundException(){
        super("You are trying to add unknown product, Please register product first in product service then try to add to cart!!!");
    }

}

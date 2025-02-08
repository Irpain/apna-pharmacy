package com.stackroute.cartservice.exception;

public class CustomerEmailInvalidException extends Exception{
    public CustomerEmailInvalidException(String email) {
        super("Customer Email { "+email+" } is Invalid !!!!");
    }
}

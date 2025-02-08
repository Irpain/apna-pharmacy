package com.stackroute.userservice.controller;

import com.stackroute.userservice.exception.SellerAlreadyExistException;
import com.stackroute.userservice.exception.SellerNotFoundException;
import com.stackroute.userservice.model.Address;
import com.stackroute.userservice.model.Seller;
import com.stackroute.userservice.service.SellerService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/api/Seller")
public class SellerController {
    @Autowired
    private SellerService sellerService;

    @PostMapping
    public ResponseEntity<Seller> addSeller(@RequestBody Seller buy){
        try {
            return new ResponseEntity<Seller>(sellerService.addSeller(buy), HttpStatus.CREATED);
        } catch (SellerAlreadyExistException e) {
            // TODO Auto-generated catch block
            return new ResponseEntity("Seller already Exist", HttpStatus.CONFLICT);
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<Seller> getByIdHandler(@PathVariable String id) {
        try {
            return new ResponseEntity<Seller>(sellerService.getById(id), HttpStatus.OK);
        } catch (SellerNotFoundException e) {
            // TODO Auto-generated catch block
            return new ResponseEntity("Seller Not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}/address")
    public ResponseEntity updateAddress(@PathVariable String id, @RequestBody Address address){
        sellerService.updateAddress(id, address);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}/profileUpdate")
    public ResponseEntity updateProfile(@RequestBody Seller Seller, @PathVariable String id){
        sellerService.updateProfile(Seller, id);
        return ResponseEntity.ok().build();
    }
}


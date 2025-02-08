package com.stackroute.userservice.controller;

import com.stackroute.userservice.exception.BuyerAlreadyExistException;
import com.stackroute.userservice.exception.BuyerNotFoundException;
import com.stackroute.userservice.model.Address;
import com.stackroute.userservice.model.Buyer;
import com.stackroute.userservice.service.BuyerService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@NoArgsConstructor
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
public class BuyerController {

    @Autowired
    private BuyerService buyerService;

    @PostMapping("/register")
    public ResponseEntity<Buyer> addBuyer(@RequestBody Buyer buy) {
        try {
            return new ResponseEntity<Buyer>(buyerService.addBuyer(buy), HttpStatus.CREATED);
        } catch (BuyerAlreadyExistException e) {
            // TODO Auto-generated catch block
            return new ResponseEntity("Buyer already Exist", HttpStatus.CONFLICT);
        }
    }


    @GetMapping("/{id}")
    public ResponseEntity<Buyer> getByIdHandler(@PathVariable String id) {
        try {
            return new ResponseEntity<Buyer>(buyerService.getById(id), HttpStatus.OK);
        } catch (BuyerNotFoundException e) {
            // TODO Auto-generated catch block
            return new ResponseEntity("Buyer Not found", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}/address")
    public ResponseEntity updateAddress(@PathVariable String id, @RequestBody Address address) {
        buyerService.updateAddress(id, address);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{id}/profileUpdate")
    public ResponseEntity updateProfile(@RequestBody Buyer buyer, @PathVariable String id) {
        buyerService.updateProfile(buyer, id);
        return ResponseEntity.ok().build();
    }
}

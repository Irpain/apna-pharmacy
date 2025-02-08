package com.stackroute.userservice.service;

import com.stackroute.userservice.config.Producer;
import com.stackroute.userservice.exception.SellerAlreadyExistException;
import com.stackroute.userservice.exception.SellerNotFoundException;
import com.stackroute.userservice.model.Address;
import com.stackroute.userservice.model.Seller;
import com.stackroute.userservice.rabbitmq.domain.UserDTO;
import com.stackroute.userservice.repository.SellerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class SellerService {
    @Autowired
    Producer producer;
    @Autowired
    private SellerRepository sellerRepository;

    public Seller addSeller(Seller sell) throws SellerAlreadyExistException {
        Optional<Seller> seller = sellerRepository.findById(sell.getEmail());
        sell.setRole("SELLER");
        UserDTO userdto = new UserDTO();
        userdto.setEmail(sell.getEmail());
        userdto.setPassword(sell.getPassword());
        userdto.setRole("SELLER");
        if (seller.isPresent()) {
            throw new SellerAlreadyExistException();
        } else {
            producer.sendMessageToRabbitMq(userdto);
            return sellerRepository.insert(sell);
        }
    }

    public Seller getById(String id) throws SellerNotFoundException {
        Optional<Seller> seller = sellerRepository.findById(id);
        if (seller.isPresent()) {
            return seller.get();
        } else {
            throw new SellerNotFoundException();
        }
    }

    public void updateAddress(String id, Address add){

        Seller sell= sellerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot Find Seller of email %s",id)));

        sell.setAddress(add);

        sellerRepository.save(sell);
    }

    public void updateProfile(Seller seller, String id){
        Seller sell= sellerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot Find Seller of email %s",id)));


        sell.setNumber(seller.getNumber());
        sell.setPassword(seller.getPassword());
        sell.setFullName(seller.getFullName());
        sell.setAddress(seller.getAddress());

        sellerRepository.save(sell);
    }
}


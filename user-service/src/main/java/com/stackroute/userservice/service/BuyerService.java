package com.stackroute.userservice.service;

import com.stackroute.userservice.config.Producer;
import com.stackroute.userservice.exception.BuyerAlreadyExistException;
import com.stackroute.userservice.exception.BuyerNotFoundException;
import com.stackroute.userservice.model.Address;
import com.stackroute.userservice.model.Buyer;
import com.stackroute.userservice.rabbitmq.domain.UserDTO;
import com.stackroute.userservice.repository.BuyerRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@AllArgsConstructor
public class BuyerService {

    @Autowired
    Producer producer;
    @Autowired
    private BuyerRepository buyerRepository;

    public Buyer addBuyer(Buyer buy) throws BuyerAlreadyExistException {
        Optional<Buyer> buyer = buyerRepository.findById(buy.getEmail());
        buy.setRole("BUYER");
        UserDTO userdto = new UserDTO();
        userdto.setEmail(buy.getEmail());
        userdto.setPassword(buy.getPassword());
        userdto.setNumber(buy.getNumber());
        userdto.setAddress(buy.getAddress());
        userdto.setFullName(buy.getFullName());
        userdto.setRole("BUYER");
        if (buyer.isPresent()) {
            throw new BuyerAlreadyExistException();
        } else {
            producer.sendMessageToRabbitMq(userdto);
            return buyerRepository.insert(buy);

        }
    }

    public Buyer getById(String id) throws BuyerNotFoundException {
        Optional<Buyer> buyer = buyerRepository.findById(id);
        if (buyer.isPresent()) {
            return buyer.get();
        } else {
            throw new BuyerNotFoundException();
        }
    }

    public void updateAddress(String id, Address add){

        Buyer buy= buyerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot Find Buyer of email %s",id)));

        buy.setAddress(add);

        buyerRepository.save(buy);
    }

    public void updateProfile(Buyer buyer, String id){
        Buyer buy= buyerRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        String.format("Cannot Find Buyer of email %s",id)));


        buy.setNumber(buyer.getNumber());
        buy.setPassword(buyer.getPassword());
        buy.setFullName(buyer.getFullName());
        buy.setAddress(buyer.getAddress());

        buyerRepository.save(buy);
    }
}

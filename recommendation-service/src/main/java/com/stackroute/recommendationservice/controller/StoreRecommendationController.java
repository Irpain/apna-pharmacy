package com.stackroute.recommendationservice.controller;



import com.fasterxml.jackson.databind.*;
import com.stackroute.recommendationservice.exception.CityNotFoundException;
import com.stackroute.recommendationservice.node.Store;
import com.stackroute.recommendationservice.service.StoreRecommendationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.HashSet;

@RestController
@RequestMapping("/api/recommendation")
public class StoreRecommendationController {

    @Autowired
    private StoreRecommendationService storeRecommendationService;

    @Autowired
    public StoreRecommendationController(StoreRecommendationService storeRecommendationService){
        this.storeRecommendationService = storeRecommendationService;
    }

    @GetMapping("/getallstores")
    public ResponseEntity<?> getAllStores(){
        ArrayList<Store> rec= this.storeRecommendationService.getAllStore();

        return new ResponseEntity<>(rec, HttpStatus.OK);

    }
    @PostMapping("/addStore")
    public ResponseEntity<?> addLoanDetails(@RequestParam("file") MultipartFile file, @RequestParam ("Store") String store) throws Exception {

        ObjectMapper objectMapper=new ObjectMapper();
        Store store1 = objectMapper.readValue(store,Store.class);
        store1.setImage(file.getBytes());

//            responseEntity = new ResponseEntity(recommendationService.getProductByProductCategory(product2.getProductCategory()), HttpStatus.OK);

        //        responseEntity = new ResponseEntity(recommendationService.getProductByCity(p.getCity()), HttpStatus.OK);

        storeRecommendationService.addNode(store1);



//        this.storeRecommendationService.addNode(store);
        return new ResponseEntity<>("Store Details added...", HttpStatus.OK);
    }

    @GetMapping("/recommend/{city}")
    public ResponseEntity<?> getStoreRecommendationsByCity(@PathVariable String city){
        try {
            HashSet<Store> rec= this.storeRecommendationService.getStoreByCity(city);
            return new ResponseEntity<>(rec, HttpStatus.OK);
        } catch (CityNotFoundException e) {
            return new ResponseEntity<>("city not found", HttpStatus.CONFLICT);
        }


    }
}

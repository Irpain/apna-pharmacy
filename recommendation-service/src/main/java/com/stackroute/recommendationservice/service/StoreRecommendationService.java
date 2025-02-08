package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.exception.CityNotFoundException;
import com.stackroute.recommendationservice.node.Store;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
@Service
public interface StoreRecommendationService {
    void addNode(Store store);


    HashSet<Store> getStoreByCity(String city) throws CityNotFoundException;

    ArrayList<Store> getAllStore();
}

package com.stackroute.recommendationservice.service;

import com.stackroute.recommendationservice.exception.CityNotFoundException;
import com.stackroute.recommendationservice.node.City;
import com.stackroute.recommendationservice.node.Store;
import com.stackroute.recommendationservice.repository.CityRepository;
import com.stackroute.recommendationservice.repository.StoreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;

@Service
public class StoreRecommendationServiceImplementation implements StoreRecommendationService{

    @Autowired
    private CityRepository cityRepository;
    @Autowired
    private StoreRepository storeRepository;

    @Autowired
    public StoreRecommendationServiceImplementation(CityRepository cityRepository, StoreRepository storeRepository){
        this.cityRepository = cityRepository;
        this.storeRepository = storeRepository;
    }


    @Override
    public void addNode(Store store) {
        if(storeRepository.findById(store.getId()).isEmpty()){
            storeRepository.save(store);
        }
        if(cityRepository.findById(store.getLocation()).isEmpty()){
            City city= new City(store.getLocation());
            cityRepository.save(city);
        }
        storeRepository.createCityRelationshipWithLStore(store.getId(), store.getLocation());

    }

    @Override
    public HashSet<Store> getStoreByCity(String city) throws CityNotFoundException {
        HashSet<Store>stores = storeRepository.getStoreByCity(city);
        if(stores.isEmpty()){
            throw new CityNotFoundException();
        }
        else
            return stores;
    }

    @Override
    public ArrayList<Store> getAllStore() {
        return (ArrayList<Store>) storeRepository.findAll();
    }
}

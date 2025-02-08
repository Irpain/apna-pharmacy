package com.stackroute.recommendationservice.config;


import com.stackroute.recommendationservice.exception.ShopIdExsistsException;
import com.stackroute.recommendationservice.node.Store;
import com.stackroute.recommendationservice.service.StoreRecommendationService;
import com.stackroute.recommendationservice.service.StoreRecommendationServiceImplementation;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Consumer {
    @Autowired
    private StoreRecommendationService storeRecommendationService;

    @RabbitListener(queues ="shop_queue")
    public void getUserDtoFromRabbitMq(ShopDTO shopDTO) throws ShopIdExsistsException {
        System.out.println(shopDTO.toString());
        System.out.println(shopDTO.getShopDescription());
        System.out.println(shopDTO.getShopImage());
        Store store = new Store();
        store.setSellerEmail(shopDTO.getSellerEmail());
        store.setStore_name(shopDTO.getShopName());
        store.setAddress(shopDTO.getShopAddress());
        store.setId(shopDTO.getShopId());
        store.setImage(shopDTO.getShopImage());
        store.setDescription(shopDTO.getShopDescription());
        store.setLocation(shopDTO.getShopCity());
        store.setLoactionLink(shopDTO.getLocationLink());
        storeRecommendationService.addNode(store);
    }
}

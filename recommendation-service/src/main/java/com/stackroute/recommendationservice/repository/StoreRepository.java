package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.node.Store;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.data.neo4j.repository.query.Query;
import org.springframework.stereotype.Repository;

import java.util.HashSet;

@Repository
public interface StoreRepository extends Neo4jRepository<Store, String> {

    @Query("MATCH (a:Store),(b:City) where (a.location)=$city and (b.city)=$city create (a)-[:from]->(b) return a")
    HashSet<Store> getStoreByCity(String city);

    @Query("MATCH (a:Store{id:$id}),(b:City{city:$city}) MERGE (a)-[city:belongs_to]->(b)")
    void createCityRelationshipWithLStore(String id, String city);
}

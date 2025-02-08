package com.stackroute.recommendationservice.repository;

import com.stackroute.recommendationservice.node.City;
import org.springframework.data.neo4j.repository.Neo4jRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CityRepository extends Neo4jRepository<City, String> {
}

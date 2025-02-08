package com.stackroute.recommendationservice.node;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.util.List;
@Node
@Data
@NoArgsConstructor
@AllArgsConstructor
public class City {

    @Id
    private String city;

}

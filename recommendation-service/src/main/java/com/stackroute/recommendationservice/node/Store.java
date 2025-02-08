package com.stackroute.recommendationservice.node;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Node;

@Node
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Store {
    @Id
    private String id;
    private String store_name;
    private String location;
    private String address;
    private byte[] image;
    private String sellerEmail;
    private String description;
    private String loactionLink;

}

package com.stackroute.paymentEntity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name="orders")

public class MyOrder {

    @Id @GeneratedValue  (generator="system-uuid")
    @GenericGenerator(name ="system-uuid", strategy = "uuid")
    private String orderId;
    // @GeneratedValue(strategy = GenerationType.AUTO)
    // private String orderId= UUID.randomUUID().toString();
    private String customerEmail;
    private String amount;
    private String receipt;
    private String status;
    private String razorpaySignature;
    private String paymentId;
}

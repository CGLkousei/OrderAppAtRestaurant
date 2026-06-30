package org.example.orderappatrestaurant.domain.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "order_details")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderDetail {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private Integer quantity;
    private String status;

    @ManyToOne
    @JoinColumn(name = "order_master_id")
    private OrderMaster orderMaster;

    @ManyToOne
    private Dish dish;
}

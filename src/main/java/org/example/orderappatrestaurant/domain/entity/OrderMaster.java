package org.example.orderappatrestaurant.domain.entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "order_masters")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class OrderMaster {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "seat_id")
    private Seat seat;

    @OneToMany(mappedBy = "orderMaster", cascade = CascadeType.ALL)
    private List<OrderDetail> details = new ArrayList<>();
}

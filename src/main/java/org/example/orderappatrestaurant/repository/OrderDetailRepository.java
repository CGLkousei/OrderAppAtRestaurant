package org.example.orderappatrestaurant.repository;

import org.example.orderappatrestaurant.domain.entity.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Long> {
    List<OrderDetail> findByOrderMasterId(Long orderMasterId);
    List<OrderDetail> findByStatus(Long status);
}

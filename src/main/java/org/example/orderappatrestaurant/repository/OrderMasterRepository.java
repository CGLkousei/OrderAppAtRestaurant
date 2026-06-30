package org.example.orderappatrestaurant.repository;

import org.example.orderappatrestaurant.domain.entity.OrderMaster;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderMasterRepository extends JpaRepository<OrderMaster, Long> {
    List<OrderMaster> findBySeatId(Long seatId);
}

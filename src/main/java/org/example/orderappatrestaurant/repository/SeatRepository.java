package org.example.orderappatrestaurant.repository;

import org.example.orderappatrestaurant.domain.entity.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SeatRepository extends JpaRepository<Seat, Long> {
    List<Seat> findByRestaurantId(Long restaurantId);
}

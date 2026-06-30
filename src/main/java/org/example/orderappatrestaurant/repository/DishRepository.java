package org.example.orderappatrestaurant.repository;

import org.example.orderappatrestaurant.domain.entity.Dish;
import org.example.orderappatrestaurant.domain.entity.Seat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DishRepository extends JpaRepository<Dish, Long> {
    List<Dish> findByRestaurantId(Long restaurantId);
}

package org.example.orderappatrestaurant;

import org.example.orderappatrestaurant.domain.entity.Dish;
import org.example.orderappatrestaurant.domain.entity.Restaurant;
import org.example.orderappatrestaurant.repository.DishRepository;
import org.example.orderappatrestaurant.repository.RestaurantRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.List;

@SpringBootApplication
public class OrderAppAtRestaurantApplication {

    public static void main(String[] args) {
        SpringApplication.run(OrderAppAtRestaurantApplication.class, args);
    }

    @Bean
    public CommandLineRunner startupRunner(
            RestaurantRepository restaurantRepository,
            DishRepository dishRepository
    ) {
        return args -> {
            System.out.println("=========================================");
            System.out.println("🚀 アプリケーション起動完了！データを確認します");
            System.out.println("=========================================");

            // 1. レストラン情報を全件取得してコンソールに表示
            List<Restaurant> restaurants = restaurantRepository.findAll();
            System.out.println("【レストラン一覧】");
            for (Restaurant restaurant : restaurants) {
                System.out.println("ID: " + restaurant.getId() + " | 店名: " + restaurant.getName());
            }

            System.out.println("-----------------------------------------");

            // 2. メニュー(料理)情報を全件取得してコンソールに表示
            List<Dish> dishes = dishRepository.findAll();
            System.out.println("【メニュー一覧】");
            for (Dish dish : dishes) {
                System.out.println("料理名: " + dish.getName() + " | 価格: " + dish.getPrice() + "円");
            }

            System.out.println("=========================================");
        };
    }
}

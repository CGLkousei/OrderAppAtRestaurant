package org.example.orderappatrestaurant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.jdbc.core.JdbcTemplate;

import javax.swing.*;

@SpringBootApplication
public class TryToConnectDB implements CommandLineRunner {

    private final JdbcTemplate jdbcTemplate;

    public TryToConnectDB(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public static void main(String[] join) {
        SpringApplication.run(TryToConnectDB.class, join);
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("====== MySQL接続テスト開始 ======");

        Integer result = jdbcTemplate.queryForObject("SELECT 1", Integer.class);

        System.out.println("MySQLからの応答結果: " + result);
        System.out.println("====== MySQLに正常に接続されました！ ======");
    }
}

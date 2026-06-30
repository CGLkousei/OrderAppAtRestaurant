-- =========================================================
-- 1. 既存テーブルの削除 (DROP TABLE)
-- ※必ず「子」から「親」の順番で削除します
-- =========================================================
DROP TABLE IF EXISTS order_details;
DROP TABLE IF EXISTS order_masters;
DROP TABLE IF EXISTS dishes;
DROP TABLE IF EXISTS seats;
DROP TABLE IF EXISTS restaurants;

-- =========================================================
-- 2. テーブルの作成 (CREATE TABLE)
-- ※「親」から「子」の順番で作成します
-- =========================================================
-- レストランテーブル (親)
CREATE TABLE restaurants (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255)
);

-- 席テーブル (レストランに依存)
CREATE TABLE seats (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
number INT,
restaurant_id BIGINT,
FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

-- 料理（メニュー）テーブル (レストランに依存)
CREATE TABLE dishes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255),
price INT,
restaurant_id BIGINT,
FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

-- 注文親テーブル (席に依存)
CREATE TABLE order_masters (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
seat_id BIGINT,
FOREIGN KEY (seat_id) REFERENCES seats(id)
);

-- 注文明細テーブル (注文親と料理に依存)
CREATE TABLE order_details (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
quantity INT,
status VARCHAR(255),
order_master_id BIGINT,
dish_id BIGINT,
FOREIGN KEY (order_master_id) REFERENCES order_masters(id),
FOREIGN KEY (dish_id) REFERENCES dishes(id)
);

-- =========================================================
-- 3. 初期データの投入 (INSERT)
-- =========================================================
INSERT INTO restaurants (name) VALUES ('大衆居酒屋 どんちゃん');

INSERT INTO seats (name, number, restaurant_id) VALUES ('テーブルA', 1, 1);
INSERT INTO seats (name, number, restaurant_id) VALUES ('テーブルB', 2, 1);
INSERT INTO seats (name, number, restaurant_id) VALUES ('カウンター', 3, 1);

INSERT INTO dishes (name, price, restaurant_id) VALUES ('生ビール', 500, 1);
INSERT INTO dishes (name, price, restaurant_id) VALUES ('枝豆', 300, 1);
INSERT INTO dishes (name, price, restaurant_id) VALUES ('焼き鳥盛り合わせ', 650, 1);
INSERT INTO dishes (name, price, restaurant_id) VALUES ('鶏の唐揚げ', 550, 1);

-- テスト注文データ
INSERT INTO order_masters (seat_id) VALUES (1);
INSERT INTO order_details (quantity, status, order_master_id, dish_id) VALUES (2, '提供済', 1, 1);
INSERT INTO order_details (quantity, status, order_master_id, dish_id) VALUES (1, '提供済', 1, 2);

INSERT INTO order_masters (seat_id) VALUES (1);
INSERT INTO order_details (quantity, status, order_master_id, dish_id) VALUES (1, '調理中', 2, 4);
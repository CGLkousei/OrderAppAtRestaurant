-- =========================================================
-- 初期データの投入 (INSERT)
-- ※テーブルの作成・削除はHibernate (ddl-auto=create) が管理します
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
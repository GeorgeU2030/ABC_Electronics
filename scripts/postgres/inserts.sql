
INSERT INTO "salesApp_categoryproduct" (id,code, description) VALUES
(1,'001', 'Electrodomesticos'),
(2,'002', 'Celulares'),
(3,'003', 'Computadores'),
(4,'004', 'TV'),
(5,'005', 'Accesorios'),
(6,'006', 'Videojuegos');

INSERT INTO "salesApp_product" (id, category_id, description, quantity_available, cost, selling_price,photo) VALUES
(1, 1, 'Nevera Haceb No Frost', 10, 300.50, 400.50, 'products/nevera.jpg'),
(2, 1, 'Congelador Challenger', 20, 500.00, 590.60, 'products/congelador.jpeg'),
(3, 1, 'Nevecon LG', 10, 1500.00, 1610.20, 'products/nevecon.jpg'),
(4, 1, 'Lavadora SAMSUNG', 10, 400.00, 500.10, 'products/lavadora.jpg'),
(5, 1, 'Secadora SAMSUNG', 10, 530.00, 670.30, 'products/secadora.jpeg'),
(6, 1, 'Estufa HACEB', 10, 110.00, 155.30, 'products/estufa.jpeg'),
(7, 1, 'Horno CHALLENGER', 10, 190.00, 260.20, 'products/horno.jpeg'),
(8, 1, 'Lavavajillas LG', 30, 590.00, 645.20, 'products/lavavajillas.jpeg'),
(9, 1, 'Microondas SAMSUNG', 20, 90.00, 115.90, 'products/microondas.jpeg'),
(10, 1, 'Licuadora OSTER', 50, 50.00, 80.90, 'products/licuadora.jpeg'),
(11, 1, 'Freidora OSTER', 20, 120.00, 160.20, 'products/freidora.jpeg'),
(12, 1, 'Plancha KALLEY', 20, 30.00, 40.90, 'products/plancha.jpeg'),
(13, 1, 'Cafetera OSTER', 50, 35.00, 46.00, 'products/cafetera.jpeg'),
(14, 1, 'Batidora KALLEY', 30, 18.00, 22.90, 'products/batidora.jpeg'),
(15, 1, 'Sandwichera KALLEY', 30, 27.00, 35.00, 'products/sandwichera.jpeg'),
(16, 1, 'Aire Acondicionado SAMSUNG', 20, 580.00, 620.50, 'products/aire.jpg'),
(17, 2, 'Iphone 15', 100, 600.00, 1130.50, 'products/iphone15.jpg'),
(18, 2, 'Iphone 11', 20, 300.00, 630.50, 'products/iphone11.jpeg'),
(19, 2, 'Samsung A24', 40, 100.00, 199.99, 'products/samsunga24.jpg'),
(20, 2, 'Samsung S23', 50, 700.00, 885.50, 'products/samsungs23.jpg'),
(21, 2, 'Motorola G84', 30, 180.00, 221.50, 'products/motorolag84.jpg'),
(22, 2, 'Motorola E22', 30, 70.00, 99.99, 'products/motorolae22.jpg'),
(23, 2, 'Samsung S23 ULTRA', 20, 1000.00, 1620.20, 'products/samsungs23ultra.jpg'),
(24, 2, 'Iphone 14', 20, 790.00, 990.90, 'products/iphone14.jpg'),
(25, 2, 'VIVO Y27', 20, 120.00, 195.90, 'products/vivoy27.jpg'),
(26, 2, 'NOKIA C21', 40, 60.00, 75.30, 'products/nokiac21.jpeg'),
(27, 2, 'Oppo A38', 70, 140.00,170.20, 'products/oppoa38.jpg'),
(28, 2, 'Alcatel 3 2020', 20, 170.00,190.50, 'products/alcatel3.jpeg'),
(29, 2, 'KALLEY BLACK 3', 30, 160.00,180.10, 'products/kalleyblack3.jpg'),
(30, 2, 'Huawei Nova 11i', 30, 200.00,230.90, 'products/huawei11.jpg'),
(31, 3, 'HP 14', 20, 390.00,440.10, 'products/hp14.jpg'),
(32, 3, 'HP Victus', 20, 900.00,990.30, 'products/hpvictus.jpg'),
(33, 3, 'Lenovo Ideapad 3 Slim', 30, 380.00,420.90, 'products/lenovoideapad.jpg'),
(34, 3, 'Lenovo Legion 7', 10, 2000.00,2410.90, 'products/legion.jpg'),
(35, 3, 'Acer Nitro', 20, 820.00,930.00, 'products/acernitro.jpg'),
(36, 3, 'MacBook Air M1', 30, 1000.00,1130.20, 'products/macbookair.jpeg'),
(37, 3, 'MacBook Air M2', 20, 1890.00,2160.90, 'products/macbookairm2.jpg'),
(38, 3, 'Asus VivoBook', 30, 400.00,469.90, 'products/asus.jpg'),
(39, 3, 'Asus TUF Gaming', 20, 790.00,885.00, 'products/asustuf.jpg'),
(40, 3, 'Asus Zephyrus', 20, 1790.00,1890.00, 'products/asuszephyrus.jpeg'),
(41, 6, 'PS5 Edicion Limitada', 20, 800.00,890.10, 'products/ps5el.jpg'),
(42, 6, 'PS5 Estandar', 20, 600.00,660.90, 'products/ps5.jpg'),
(43, 6, 'XBOX Series X', 20, 650.00,730.90, 'products/xboxX.jpeg'),
(44, 6, 'XBOX Series S Black', 30, 400.00,490.90, 'products/xboxsblack.jpg'),
(45, 6, 'XBOX Series S', 40, 300.00,385.10, 'products/xboxs.jpg'),
(46, 6, 'Nintendo Switch', 30, 350.00,400.50, 'products/nintendo.jpeg'),
(47, 6, 'FC 24 PS5', 70, 30.00,56.10, 'products/fc24.jpg'),
(48, 6, 'Marvels Spiderman2 PS5', 40, 50.00,90.90, 'products/ms2.jpg'),
(49, 6, 'Star Wars:Jedi Survivor XBOX', 20, 30.00,49.90, 'products/jedi.jpg'),
(50, 6, 'Super Mario Bros Wonder', 40, 50.00,70.90, 'products/mario.jpg');

INSERT INTO "salesApp_customer" (id,first_name, last_name, address, date_of_birth, email, home_phone, cell_phone)
VALUES 
  (2,'Lionel', 'Messi', 'Miami History Park', '1995-05-15', 'messi10@gmail.com', '111-222-3333', '444555666'),
  (3,'Elon', 'Musk', 'Seattle Tesla Avn', '1990-05-15', 'elonthemusk@gmail.com', '156-222-3333', '222111000'),
  (4,'aaaaa', 'aaaaa', 'cali', '1995-05-15', 'aaaaa@gmail.com', '333-333-3333', '333333333'); 

insert into "salesApp_order" values (1, '2023-11-07', '2023-11-08', '2023-11-07', 2), (2, '2023-11-07', '2023-11-08', '2023-11-07', 2);


insert into "salesApp_orderdetail" values (1, 1, 1130.50, 1, 17), (2, 1, 500.10, 2, 4);

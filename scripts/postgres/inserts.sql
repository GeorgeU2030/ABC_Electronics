
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
(16, 1, 'Aire Acondicionado SAMSUNG', 20, 580.00, 620.50, 'products/aire.jpg');

INSERT INTO "salesApp_customer" (id,first_name, last_name, address, date_of_birth, email, home_phone, cell_phone)
VALUES 
  (1,'Lebron', 'James', 'L.A Star Street', '2000-01-01', 'lebron23@gmail.com', '123-456-7890', '999666777'),
  (2,'Lionel', 'Messi', 'Miami History Park', '1995-05-15', 'messi10@gmail.com', '111-222-3333', '444555666'),
  (3,'Elon', 'Musk', 'Seattle Tesla Avn', '1990-05-15', 'elonthemusk@gmail.com', '156-222-3333', '222111000')
;
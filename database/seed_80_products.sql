-- SmartPick: Seed 80 products across 3 categories (Mobiles: 30, TVs: 30, Smartwatches: 20)
-- Preserves existing laptops (IDs 1-100)
-- Repeatable and idempotent via ON DUPLICATE KEY UPDATE


-- 2. Insert 30 Mobiles (IDs 101 to 130)
INSERT INTO products (id, name, brand, category, price, processor, ram_gb, storage_gb, gpu, display_size, battery_wh, rating, image_url, resolution, has_gps, battery_life_days)
VALUES
(101, 'Galaxy S24 Ultra', 'Samsung', 'Mobile', 129999.00, 'Snapdragon 8 Gen 3', 12, 512, 'Adreno 750', 6.80, 5000.00, 4.80, 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600', 'Quad HD+ AMOLED', true, 2),
(102, 'Galaxy A55 5G', 'Samsung', 'Mobile', 39999.00, 'Exynos 1480', 8, 256, 'Xclipse 530', 6.60, 5000.00, 4.40, 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600', 'Full HD+ Super AMOLED', true, 2),
(103, 'Galaxy M34 5G', 'Samsung', 'Mobile', 16999.00, 'Exynos 1280', 6, 128, 'Mali-G68', 6.50, 6000.00, 4.20, 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600', 'Full HD+ Super AMOLED', true, 3),
(104, 'iPhone 16 Pro Max', 'Apple', 'Mobile', 144900.00, 'Apple A18 Pro', 8, 256, 'Apple 6-core GPU', 6.90, 4685.00, 4.90, 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600', 'Super Retina XDR OLED', true, 2),
(105, 'iPhone 15', 'Apple', 'Mobile', 69900.00, 'Apple A16 Bionic', 6, 128, 'Apple 5-core GPU', 6.10, 3349.00, 4.70, 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600', 'Super Retina XDR OLED', true, 1),
(106, 'iPhone 13', 'Apple', 'Mobile', 48999.00, 'Apple A15 Bionic', 4, 128, 'Apple 4-core GPU', 6.10, 3240.00, 4.60, 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600', 'Super Retina XDR OLED', true, 1),
(107, 'OnePlus 12', 'OnePlus', 'Mobile', 64999.00, 'Snapdragon 8 Gen 3', 16, 512, 'Adreno 750', 6.82, 5400.00, 4.70, 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600', '2K ProXDR AMOLED', true, 2),
(108, 'OnePlus 12R', 'OnePlus', 'Mobile', 39999.00, 'Snapdragon 8 Gen 2', 16, 256, 'Adreno 740', 6.78, 5500.00, 4.60, 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600', '1.5K AMOLED', true, 2),
(109, 'OnePlus Nord CE4', 'OnePlus', 'Mobile', 24999.00, 'Snapdragon 7 Gen 3', 8, 128, 'Adreno 720', 6.70, 5500.00, 4.40, 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600', 'Full HD+ AMOLED', true, 2),
(110, 'Xiaomi 14 Ultra', 'Xiaomi', 'Mobile', 99999.00, 'Snapdragon 8 Gen 3', 16, 512, 'Adreno 750', 6.73, 5000.00, 4.70, 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600', 'WQHD+ AMOLED', true, 2),
(111, 'Xiaomi 14', 'Xiaomi', 'Mobile', 69999.00, 'Snapdragon 8 Gen 3', 12, 512, 'Adreno 750', 6.36, 4610.00, 4.60, 'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?w=600', '1.5K LTPO AMOLED', true, 2),
(112, 'Xiaomi 11T Pro 5G', 'Xiaomi', 'Mobile', 28999.00, 'Snapdragon 888', 8, 256, 'Adreno 660', 6.67, 5000.00, 4.30, 'https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600', 'Full HD+ AMOLED', true, 1),
(113, 'Redmi Note 13 Pro+ 5G', 'Redmi', 'Mobile', 31999.00, 'Dimensity 7200 Ultra', 12, 256, 'Mali-G610', 6.67, 5000.00, 4.40, 'https://images.unsplash.com/photo-1533228876829-65c94e7b5025?w=600', '1.5K Curved AMOLED', true, 2),
(114, 'Redmi Note 13 5G', 'Redmi', 'Mobile', 17999.00, 'Dimensity 6080', 8, 256, 'Mali-G57', 6.67, 5000.00, 4.20, 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=600', 'Full HD+ AMOLED', true, 2),
(115, 'Redmi 13C 5G', 'Redmi', 'Mobile', 10999.00, 'Dimensity 6100+', 6, 128, 'Mali-G57', 6.74, 5000.00, 4.10, 'https://images.unsplash.com/photo-1584438784894-089d6a62b8fa?w=600', 'HD+ 90Hz Display', true, 2),
(116, 'Realme GT 6', 'Realme', 'Mobile', 40999.00, 'Snapdragon 8s Gen 3', 12, 256, 'Adreno 735', 6.78, 5500.00, 4.50, 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600', '1.5K 8T LTPO AMOLED', true, 2),
(117, 'Realme 12 Pro+ 5G', 'Realme', 'Mobile', 29999.00, 'Snapdragon 7s Gen 2', 8, 256, 'Adreno 710', 6.70, 5000.00, 4.40, 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600', 'Full HD+ Curved AMOLED', true, 2),
(118, 'Realme Narzo 70 Pro 5G', 'Realme', 'Mobile', 18999.00, 'Dimensity 7050', 8, 128, 'Mali-G68', 6.67, 5000.00, 4.30, 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600', 'Full HD+ AMOLED', true, 2),
(119, 'Vivo X100 Pro', 'Vivo', 'Mobile', 89999.00, 'Dimensity 9300', 16, 512, 'Immortalis-G720', 6.78, 5400.00, 4.80, 'https://images.unsplash.com/photo-1605236453806-6ff36851218e?w=600', '1.5K LTPO AMOLED', true, 2),
(120, 'Vivo V30 Pro', 'Vivo', 'Mobile', 41999.00, 'Dimensity 8200', 12, 512, 'Mali-G610', 6.78, 5000.00, 4.50, 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=600', '1.5K 3D Curved AMOLED', true, 2),
(121, 'Vivo T3 5G', 'Vivo', 'Mobile', 19999.00, 'Dimensity 7200', 8, 128, 'Mali-G610', 6.67, 5000.00, 4.30, 'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600', 'Full HD+ AMOLED', true, 2),
(122, 'OPPO Find N3 Flip', 'OPPO', 'Mobile', 74999.00, 'Dimensity 9200', 12, 256, 'Immortalis-G715', 6.80, 4300.00, 4.50, 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=600', 'Full HD+ Foldable AMOLED', true, 1),
(123, 'OPPO Reno 11 Pro 5G', 'OPPO', 'Mobile', 37999.00, 'Dimensity 8200', 12, 256, 'Mali-G610', 6.70, 4600.00, 4.40, 'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=600', 'Full HD+ 3D Curved OLED', true, 2),
(124, 'OPPO F25 Pro 5G', 'OPPO', 'Mobile', 23999.00, 'Dimensity 7050', 8, 128, 'Mali-G68', 6.70, 5000.00, 4.20, 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?w=600', 'Full HD+ AMOLED', true, 2),
(125, 'Motorola Edge 50 Ultra', 'Motorola', 'Mobile', 59999.00, 'Snapdragon 8s Gen 3', 16, 512, 'Adreno 735', 6.70, 4500.00, 4.60, 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=600', '1.5K Super HD pOLED', true, 2),
(126, 'Motorola Edge 50 Fusion', 'Motorola', 'Mobile', 22999.00, 'Snapdragon 7s Gen 2', 8, 128, 'Adreno 710', 6.70, 5000.00, 4.40, 'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=600', 'Full HD+ Endless Edge pOLED', true, 2),
(127, 'Motorola Moto G84 5G', 'Motorola', 'Mobile', 17999.00, 'Snapdragon 695', 12, 256, 'Adreno 619', 6.55, 5000.00, 4.30, 'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?w=600', 'Full HD+ 120Hz pOLED', true, 2),
(128, 'iQOO 12 5G', 'iQOO', 'Mobile', 52999.00, 'Snapdragon 8 Gen 3', 16, 512, 'Adreno 750', 6.78, 5000.00, 4.70, 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600', '1.5K 144Hz LTPO AMOLED', true, 2),
(129, 'iQOO Neo 9 Pro', 'iQOO', 'Mobile', 36999.00, 'Snapdragon 8 Gen 2', 12, 256, 'Adreno 740', 6.78, 5160.00, 4.60, 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=600', '1.5K 144Hz AMOLED', true, 2),
(130, 'iQOO Z9 5G', 'iQOO', 'Mobile', 19999.00, 'Dimensity 7200', 8, 128, 'Mali-G610', 6.67, 5000.00, 4.30, 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600', 'Full HD+ Ultra AMOLED', true, 2)
ON DUPLICATE KEY UPDATE
  name=VALUES(name), brand=VALUES(brand), category=VALUES(category), price=VALUES(price),
  processor=VALUES(processor), ram_gb=VALUES(ram_gb), storage_gb=VALUES(storage_gb),
  gpu=VALUES(gpu), display_size=VALUES(display_size), battery_wh=VALUES(battery_wh),
  rating=VALUES(rating), image_url=VALUES(image_url), resolution=VALUES(resolution),
  has_gps=VALUES(has_gps), battery_life_days=VALUES(battery_life_days);

-- 3. Insert 30 Smart TVs (IDs 131 to 160)
INSERT INTO products (id, name, brand, category, price, processor, ram_gb, storage_gb, gpu, display_size, battery_wh, rating, image_url, resolution, has_gps, battery_life_days)
VALUES
(131, 'Crystal 4K Vivid Pro 43', 'Samsung', 'TV', 28990.00, 'Crystal Processor 4K', 2, 8, 'Mali-G52', 43.00, NULL, 4.40, 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600', '4K Ultra HD', false, NULL),
(132, 'Crystal 4K Vivid Pro 55', 'Samsung', 'TV', 42990.00, 'Crystal Processor 4K', 2, 8, 'Mali-G52', 55.00, NULL, 4.50, 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600', '4K Ultra HD', false, NULL),
(133, 'QN90C Neo QLED 65', 'Samsung', 'TV', 149990.00, 'Neural Quantum Processor 4K', 4, 16, 'Neural AI Engine', 65.00, NULL, 4.80, 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=600', '4K Neo QLED', false, NULL),
(134, 'S90C OLED 55', 'Samsung', 'TV', 129990.00, 'Neural Quantum Processor 4K', 4, 16, 'Neural AI Engine', 55.00, NULL, 4.90, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600', '4K OLED', false, NULL),
(135, 'HD Smart LED TV 32', 'Samsung', 'TV', 13990.00, 'HyperReal Picture Engine', 1, 4, 'Integrated', 32.00, NULL, 4.20, 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600', 'HD Ready', false, NULL),
(136, 'UR7500 4K UHD 43', 'LG', 'TV', 29990.00, 'α5 AI Processor Gen6', 2, 8, 'Mali-G57', 43.00, NULL, 4.40, 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600', '4K Ultra HD', false, NULL),
(137, 'UR7500 4K UHD 55', 'LG', 'TV', 41990.00, 'α5 AI Processor Gen6', 2, 8, 'Mali-G57', 55.00, NULL, 4.50, 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600', '4K Ultra HD', false, NULL),
(138, 'C3 OLED evo 55', 'LG', 'TV', 119990.00, 'α9 AI Processor Gen6', 4, 16, 'α9 AI Engine', 55.00, NULL, 4.90, 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600', '4K OLED', false, NULL),
(139, 'G3 Gallery Edition OLED 65', 'LG', 'TV', 199990.00, 'α9 AI Processor Gen6', 4, 32, 'α9 AI Engine', 65.00, NULL, 4.90, 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=600', '4K OLED', false, NULL),
(140, 'LR6500 Smart FHD 32', 'LG', 'TV', 16490.00, 'α5 Gen5 AI Processor', 1, 8, 'Integrated', 32.00, NULL, 4.30, 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600', 'Full HD', false, NULL),
(141, 'Bravia 2 4K 43', 'Sony', 'TV', 41990.00, '4K Processor X1', 2, 16, 'Mali-G52', 43.00, NULL, 4.60, 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600', '4K Ultra HD', false, NULL),
(142, 'Bravia 2 4K 55', 'Sony', 'TV', 59990.00, '4K Processor X1', 2, 16, 'Mali-G52', 55.00, NULL, 4.70, 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=600', '4K Ultra HD', false, NULL),
(143, 'Bravia XR A80L OLED 65', 'Sony', 'TV', 219990.00, 'Cognitive Processor XR', 4, 32, 'XR Graphic Engine', 65.00, NULL, 4.90, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600', '4K OLED', false, NULL),
(144, 'Bravia XR X90L Full Array 55', 'Sony', 'TV', 99990.00, 'Cognitive Processor XR', 3, 32, 'XR Graphic Engine', 55.00, NULL, 4.80, 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600', '4K Ultra HD', false, NULL),
(145, 'Bravia W830K HD 32', 'Sony', 'TV', 24990.00, 'X-Reality PRO Engine', 1, 16, 'Integrated', 32.00, NULL, 4.40, 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600', 'HD Ready', false, NULL),
(146, 'Smart TV X 43', 'Xiaomi', 'TV', 24999.00, 'Vivid Picture Engine Quad Core', 2, 8, 'Mali-G52', 43.00, NULL, 4.30, 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600', '4K Ultra HD', false, NULL),
(147, 'Smart TV X 50', 'Xiaomi', 'TV', 29999.00, 'Vivid Picture Engine Quad Core', 2, 8, 'Mali-G52', 50.00, NULL, 4.40, 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600', '4K Ultra HD', false, NULL),
(148, 'Smart TV X Pro QLED 55', 'Xiaomi', 'TV', 37999.00, 'Vivid Picture Engine 2 Pro', 2, 32, 'Mali-G52 MP2', 55.00, NULL, 4.50, 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=600', '4K QLED', false, NULL),
(149, 'Smart TV X 65', 'Xiaomi', 'TV', 54999.00, 'Vivid Picture Engine Quad Core', 2, 16, 'Mali-G52', 65.00, NULL, 4.50, 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600', '4K Ultra HD', false, NULL),
(150, 'Smart TV A HD 32', 'Xiaomi', 'TV', 12499.00, 'Vivid Picture Engine 64-bit', 1, 8, 'Mali-G31', 32.00, NULL, 4.20, 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600', 'HD Ready', false, NULL),
(151, '4K C645 QLED 43', 'TCL', 'TV', 26990.00, 'AiPQ Engine 3.0', 2, 16, 'Mali-G31', 43.00, NULL, 4.30, 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=600', '4K QLED', false, NULL),
(152, '4K C645 QLED 55', 'TCL', 'TV', 38990.00, 'AiPQ Engine 3.0', 2, 16, 'Mali-G31', 55.00, NULL, 4.40, 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600', '4K QLED', false, NULL),
(153, 'C755 Mini LED 65', 'TCL', 'TV', 89990.00, 'AiPQ Pro Processor', 3, 32, 'Mali-G52', 65.00, NULL, 4.70, 'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=600', '4K Mini LED', false, NULL),
(154, 'C855 QD-Mini LED 75', 'TCL', 'TV', 179990.00, 'AiPQ Pro Processor', 4, 64, 'Mali-G52', 75.00, NULL, 4.80, 'https://images.unsplash.com/photo-1461151304267-38535e780c79?w=600', '4K Mini LED', false, NULL),
(155, 'S5400A Full HD 32', 'TCL', 'TV', 13490.00, 'IPQ Engine 64-bit', 1, 8, 'Mali-G31', 32.00, NULL, 4.20, 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=600', 'Full HD', false, NULL),
(156, 'Tornado QLED 55', 'Hisense', 'TV', 36999.00, 'Hi-View Picture Engine', 2, 16, 'Mali-G52', 55.00, NULL, 4.40, 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=600', '4K QLED', false, NULL),
(157, 'U7K Mini LED 65', 'Hisense', 'TV', 74999.00, 'Hi-View Picture Engine Pro', 3, 32, 'Mali-G52', 65.00, NULL, 4.70, 'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=600', '4K Mini LED', false, NULL),
(158, 'E6N 4K UHD 50', 'Hisense', 'TV', 27999.00, 'Quad Core 4K Processor', 2, 8, 'Mali-G52', 50.00, NULL, 4.30, 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600', '4K Ultra HD', false, NULL),
(159, 'Advanced I Series 43', 'Acer', 'TV', 21999.00, 'Intelligent Frame Processor', 2, 16, 'Mali-G31', 43.00, NULL, 4.20, 'https://images.unsplash.com/photo-1509281373149-e957c6296406?w=600', '4K Ultra HD', false, NULL),
(160, 'Pure Sight OLED 65', 'Acer', 'TV', 139999.00, 'Cortex A55 Quad Core', 3, 32, 'Mali-G52', 65.00, NULL, 4.70, 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=600', '4K OLED', false, NULL)
ON DUPLICATE KEY UPDATE
  name=VALUES(name), brand=VALUES(brand), category=VALUES(category), price=VALUES(price),
  processor=VALUES(processor), ram_gb=VALUES(ram_gb), storage_gb=VALUES(storage_gb),
  gpu=VALUES(gpu), display_size=VALUES(display_size), battery_wh=VALUES(battery_wh),
  rating=VALUES(rating), image_url=VALUES(image_url), resolution=VALUES(resolution),
  has_gps=VALUES(has_gps), battery_life_days=VALUES(battery_life_days);

-- 4. Insert 20 Smartwatches (IDs 161 to 180)
INSERT INTO products (id, name, brand, category, price, processor, ram_gb, storage_gb, gpu, display_size, battery_wh, rating, image_url, resolution, has_gps, battery_life_days)
VALUES
(161, 'Apple Watch Ultra 2', 'Apple', 'Smartwatch', 79900.00, 'Apple S9 SiP Dual Core', 2, 64, 'Integrated', 1.92, 542.00, 4.90, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', '410x502 Retina OLED', true, 3),
(162, 'Apple Watch Series 9', 'Apple', 'Smartwatch', 41900.00, 'Apple S9 SiP Dual Core', 2, 64, 'Integrated', 1.90, 308.00, 4.80, 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600', '396x484 Retina OLED', true, 1),
(163, 'Apple Watch SE Gen 2', 'Apple', 'Smartwatch', 24900.00, 'Apple S8 SiP Dual Core', 1, 32, 'Integrated', 1.78, 296.00, 4.60, 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600', '368x448 Retina OLED', true, 1),
(164, 'Galaxy Watch 6 Classic', 'Samsung', 'Smartwatch', 32999.00, 'Exynos W930 Dual Core', 2, 16, 'Mali-G68', 1.47, 425.00, 4.70, 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600', '480x480 Super AMOLED', true, 2),
(165, 'Galaxy Watch 6', 'Samsung', 'Smartwatch', 21999.00, 'Exynos W930 Dual Core', 2, 16, 'Mali-G68', 1.31, 300.00, 4.60, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600', '432x432 Super AMOLED', true, 2),
(166, 'Galaxy Watch FE', 'Samsung', 'Smartwatch', 14999.00, 'Exynos W920 Dual Core', 2, 16, 'Mali-G68', 1.20, 247.00, 4.40, 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600', '396x396 Super AMOLED', true, 2),
(167, 'Wave Sigma 3', 'boAt', 'Smartwatch', 1499.00, 'Crest Smart Chipset', NULL, NULL, 'Integrated', 1.96, 260.00, 4.10, 'https://images.unsplash.com/photo-1544117518-30df578096a4?w=600', '240x284 HD Display', false, 5),
(168, 'Storm Call 3', 'boAt', 'Smartwatch', 1799.00, 'Crest+ Calling SoC', NULL, NULL, 'Integrated', 1.83, 230.00, 4.00, 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600', '240x280 HD Display', false, 7),
(169, 'ColorFit Pro 5 Max', 'Noise', 'Smartwatch', 4499.00, 'TruSync Dual-Engine SoC', NULL, NULL, 'Integrated', 1.96, 300.00, 4.30, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', '410x502 AMOLED', false, 7),
(170, 'Halo Plus Elite', 'Noise', 'Smartwatch', 3799.00, 'TruSync Single-Chip BT', NULL, NULL, 'Integrated', 1.46, 300.00, 4.20, 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600', '466x466 AMOLED', false, 7),
(171, 'Fenix 7 Pro Sapphire', 'Garmin', 'Smartwatch', 74990.00, 'Garmin Multi-GNSS Processor', NULL, 32, 'Integrated', 1.30, 400.00, 4.90, 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600', '260x260 Sunlight MIP', true, 18),
(172, 'Forerunner 265', 'Garmin', 'Smartwatch', 44990.00, 'Garmin Multi-Frequency GPS', NULL, 8, 'Integrated', 1.30, 300.00, 4.80, 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600', '416x416 AMOLED', true, 13),
(173, 'Balance AI Smartwatch', 'Amazfit', 'Smartwatch', 21999.00, 'Dual-Band GNSS & Zepp OS', NULL, 4, 'Integrated', 1.50, 475.00, 4.60, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600', '480x480 AMOLED', true, 14),
(174, 'Active Fitness Watch', 'Amazfit', 'Smartwatch', 12499.00, 'Circular Polarized GPS SoC', NULL, 2, 'Integrated', 1.75, 300.00, 4.50, 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=600', '390x450 AMOLED', true, 14),
(175, 'Pop 3R Metallic', 'Amazfit', 'Smartwatch', 3499.00, 'Realtek BLE 5.2 SoC', NULL, NULL, 'Integrated', 1.43, 300.00, 4.10, 'https://images.unsplash.com/photo-1544117518-30df578096a4?w=600', '466x466 HD AMOLED', false, 12),
(176, 'OnePlus Watch 2', 'OnePlus', 'Smartwatch', 24999.00, 'Snapdragon W5 + BES2700', 2, 32, 'Adreno 702', 1.43, 500.00, 4.70, 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600', '466x466 High-Res AMOLED', true, 4),
(177, 'OnePlus Watch 2R', 'OnePlus', 'Smartwatch', 17999.00, 'Snapdragon W5 Dual-Engine', 2, 32, 'Adreno 702', 1.43, 500.00, 4.50, 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600', '466x466 AMOLED', true, 4),
(178, 'Redmi Watch 4', 'Redmi', 'Smartwatch', 9999.00, 'Xiaomi HyperOS Chipset', NULL, NULL, 'Integrated', 1.97, 470.00, 4.40, 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=600', '390x450 LTPS AMOLED', true, 20),
(179, 'Redmi Watch 3 Active', 'Redmi', 'Smartwatch', 2999.00, 'High-Performance BLE 5.3', NULL, NULL, 'Integrated', 1.83, 289.00, 4.20, 'https://images.unsplash.com/photo-1510017803434-a899398421b3?w=600', '240x280 LCD Display', false, 12),
(180, 'Realme Watch S2', 'Realme', 'Smartwatch', 4499.00, 'Super-fast Dual-Mode BLE', NULL, 4, 'Integrated', 1.43, 380.00, 4.30, 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600', '466x466 AMOLED Display', false, 14)
ON DUPLICATE KEY UPDATE
  name=VALUES(name), brand=VALUES(brand), category=VALUES(category), price=VALUES(price),
  processor=VALUES(processor), ram_gb=VALUES(ram_gb), storage_gb=VALUES(storage_gb),
  gpu=VALUES(gpu), display_size=VALUES(display_size), battery_wh=VALUES(battery_wh),
  rating=VALUES(rating), image_url=VALUES(image_url), resolution=VALUES(resolution),
  has_gps=VALUES(has_gps), battery_life_days=VALUES(battery_life_days);

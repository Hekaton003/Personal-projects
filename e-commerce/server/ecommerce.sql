"Create table for users":

CREATE TABLE users(
  id integer NOT NULL,
  name character varying(255),
  password character varying(255),
  email character varying(255),
  lastname character varying(255),
  country character varying(255),
  city character varying(255),
  address character varying(255),
  zipcode character varying(255),
  telephone character varying(255),
  PRIMARY KEY (id)
)

"Insert data in the table users":

INSERT INTO users(id,name,password,email,lastname,country,city,address,zipcode,telephone)
VALUES(1,'Jovan','Rambo2024#','jovandavaliev@gmail.com','Davaliev','Macedonia','Skopje','Video Smilevski Bato 2B','1000','+38970845645')

INSERT INTO users(id,name,password,email,lastname,country,city,address,zipcode,telephone)
VALUES(2,'Marcos','Castildo123','mark_alonso@gmail.com','Alonso','Argentina','Buenos Aires','5470 Marco Avellaneda','C1437CEE','+54534784')

INSERT INTO users(id,name,password,email,lastname,country,city,address,zipcode,telephone)
VALUES(3,'Ema','Barbie2024$','EmaThompson@gmail.com','Thompson','Australia','Sydney','20 Ocean Street','A12348','0286491522')

INSERT INTO users(id,name,password,email,lastname,country,city,address,zipcode,telephone)
VALUES(4,'Jake','AmericaGreat2024!','JakeFurry@gmail.com','Furry','England','Manchester','Victoria Station, Manchester','M3 1AR','+447447395795')

INSERT INTO users(id,name,password,email,lastname,country,city,address,zipcode,telephone)
VALUES(5,'James','CaptainAmerica2012!','jamiefalcon12@gmail.com','Falcon','United States','Boston','85 N Washington St','02760','5086952897')

"Create table for orders":

CREATE TABLE orders
(
    id integer NOT NULL,
    user_id integer NOT NULL,
    product_id integer NOT NULL,
    quantity integer NOT NULL,
    date date,
    PRIMARY KEY (id)
)

"Insert data in the table users":

INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(1,2,10,2,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(2,2,15,2,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(3,2,6,1,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(4,1,9,2,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(5,3,13,1,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(6,3,14,1,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(7,4,12,5,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(8,4,16,1,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(9,4,19,1,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(10,4,19,1,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(11,4,16,2,"2024-02-13")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(12,1,15,1,"2024-02-14")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(13,1,17,2,"2024-02-14")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(14,2,6,1,"2024-02-14")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(15,1,15,1,"2024-02-14")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(16,1,11,2,"2024-02-14")


INSERT INTO users(id,user_id,product_id,quantity,date)
VALUES(17,1,12,1,"2024-02-14")







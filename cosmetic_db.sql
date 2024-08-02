-- Create database
CREATE DATABASE IF NOT EXISTS cosmetic_db;
USE cosmetic_db;

-- Create Users table
CREATE TABLE Users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    profile ENUM('Admin', 'Manager', 'Warehouse', 'Other') NOT NULL
);

-- Create Products table
CREATE TABLE Products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    expiration_date DATE,
    stock INT NOT NULL DEFAULT 0,
    unit VARCHAR(50) NOT NULL,
    lot VARCHAR(50) -- Added 'lot' field
);

-- Create Entries table
CREATE TABLE Entries (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    quantity INT NOT NULL,
    entry_date DATE NOT NULL,
    supplier VARCHAR(100),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

-- Create Exits table
CREATE TABLE Exits (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_id INT,
    quantity INT NOT NULL,
    exit_date DATE NOT NULL,
    customer VARCHAR(100),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

-- Create Formulas table
CREATE TABLE Formulas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT
);

-- Create FormulaIngredients table with percentage field
CREATE TABLE FormulaIngredients (
    id INT AUTO_INCREMENT PRIMARY KEY,
    formula_id INT,
    product_id INT,
    quantity DECIMAL(10, 2) NOT NULL, -- Quantity of product in the formula
    percentage DECIMAL(5, 2) NOT NULL, -- Percentage of product in the formula
    FOREIGN KEY (formula_id) REFERENCES Formulas(id),
    FOREIGN KEY (product_id) REFERENCES Products(id),
    CHECK (percentage > 0 AND percentage <= 100) -- Ensure percentage is valid
);

-- Create Orders table with user assignment
CREATE TABLE Orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_date DATE NOT NULL,
    status ENUM('Pending', 'In Progress', 'Completed') NOT NULL DEFAULT 'Pending',
    user_id INT, -- User assigned to the order
    FOREIGN KEY (user_id) REFERENCES Users(id) -- Foreign key to Users table
);

-- Create OrderDetails table with percentage field
CREATE TABLE OrderDetails (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    product_id INT,
    quantity DECIMAL(10, 2) NOT NULL,
    added BOOLEAN NOT NULL DEFAULT FALSE, -- Indicates if the product has been added
    FOREIGN KEY (order_id) REFERENCES Orders(id),
    FOREIGN KEY (product_id) REFERENCES Products(id)
);

-- Create a trigger to enforce that the sum of percentages for each formula is 100
DELIMITER //
CREATE TRIGGER CheckPercentageSum BEFORE INSERT ON FormulaIngredients
FOR EACH ROW
BEGIN
    DECLARE totalPercentage DECIMAL(5, 2);
    SELECT SUM(percentage) INTO totalPercentage
    FROM FormulaIngredients
    WHERE formula_id = NEW.formula_id;

    IF (totalPercentage + NEW.percentage) > 100 THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'The total percentage of ingredients for the formula cannot exceed 100%';
    END IF;
END;
//
DELIMITER ;

/*CREATE DATABASE web_backend;
USE web_backend;*/ --optional native command sql

CREATE TABLE inf_doctor (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    sub_specialty ENUM(
        'General Cardiology',
        'Interventional Cardiology',
        'Electrophysiology',
        'Echocardiography',
        'Pediatric Cardiology',
        'Cardiothoracic Surgery',
        'Heart Failure Specialist'
    ) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    phone_number VARCHAR5(50) NOT NULL,
    work_schedule VARCHAR(100) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE inf_patient (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    nik CHAR(16) UNIQUE NOT NULL,
    gender ENUM('Male', 'Female') NOT NULL,
    birth_date DATE NOT NULL,
    address TEXT,
    phone_number VARCHAR(20)
) ENGINE=InnoDB;

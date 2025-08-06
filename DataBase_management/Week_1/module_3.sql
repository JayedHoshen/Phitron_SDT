use phitron;

CREATE TABLE Student
(
	Roll CHAR(4) PRIMARY KEY,
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(60) UNIQUE,
    Address VARCHAR(255),
    Age INT CHECK(Age > 10)
);

CREATE TABLE Student
(
	Roll CHAR(4),
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(60),
    Address VARCHAR(255),
    Age INT,
    PRIMARY KEY(Roll),
    UNIQUE(Email),
    CHECK(Age > 10)
);

CREATE TABLE Student
(
	Roll CHAR(4),
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(60),
    Address VARCHAR(255),
    Age INT,
    Constraint PRIMARY KEY(Roll),
    Constraint UNIQUE(Email),
	Constraint CHECK(Age > 10)
);

CREATE TABLE Student
(
	Roll CHAR(4),
    Name VARCHAR(50) NOT NULL,
    Email VARCHAR(60),
    Address VARCHAR(255),
    Age INT,
    Constraint pk_rule PRIMARY KEY(Roll),
    Constraint unique_rule UNIQUE(Email),
	Constraint check_rule CHECK(Age > 10)
);

INSERT INTO Student (Roll, Name, Email, Address, Age) VALUES('0001', 'Jayed', 'jayedkn@gmail.com', 'Dhaka', 20);

CREATE TABLE Library
(
	BookName VARCHAR(50) PRIMARY KEY,
    WhoHired_Roll CHAR(4),
    FOREIGN KEY (WhoHired_Roll) REFERENCES Student(Roll)
);

CREATE TABLE Course
(
	CourseName VARCHAR(10),
    University VARCHAR(10),
    Credit INT,
    PRIMARY KEY (CourseName, University)
);


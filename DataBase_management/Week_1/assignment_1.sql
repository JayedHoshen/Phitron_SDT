CREATE TABLE Student
(
	Roll CHAR(6),
    Name VARCHAR(60) NOT NULL,
    Email VARCHAR(60),
    Address VARCHAR(255),
    Age INT,
    Constraint pk_roll PRIMARY KEY(Roll),
    Constraint unique_mail UNIQUE(Email),
	Constraint check_age CHECK(Age > 16)
);

CREATE TABLE Library
(
	BookName VARCHAR(60) PRIMARY KEY,
    Hired_Roll CHAR(6),
    FOREIGN KEY (Hired_Roll) REFERENCES Student(Roll)
);

CREATE TABLE Fees
(
	ID VARCHAR(50) PRIMARY KEY,
    Bal_ID CHAR(6),
    Balance DOUBLE NOT NULL,
    FOREIGN KEY (Bal_ID) REFERENCES Student(Roll)
);

SELECT DISTINCT Department
FROM Employee;

SELECT  LastName
FROM Employee
ORDER BY Age DESC;

SELECT  LastName
FROM Employee
WHERE Age > 30 AND Department = 'Marketing';

SELECT *
FROM Employee;

SELECT  *
FROM Employee
WHERE FastName LIKE '%son%' OR LastName LIKE '%son%';

SELECT  *
FROM Employee
WHERE Department = 'Marketing';

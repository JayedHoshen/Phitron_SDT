USE phitron;

CREATE TABLE Employee
(
	EmpId CHAR(6) PRIMARY KEY,
    EmpName VARCHAR(50) NOT NULL,
    Joining_Year CHAR(4) NOT NULL,
    Birthday VARCHAR(30) CHECK(Birthday >= 2000),
    Designation VARCHAR(20),
    Salary NUMERIC
);
USE phitron;

CREATE TABLE Employee(
	EmployeeId varchar(8) PRIMARY KEY,
    EmployeeName varchar(60),
    EmployeeSalary numeric,
    JoiningDate varchar(100)
);

INSERT INTO employee 
VALUES(1, 'Jon', 10000, '5 may 2013');

INSERT INTO employee 
VALUES(2, 'Jayed', 50000, '5 may 2001');

SET SQL_SAFE_UPDATES = 0;
DELETE FROM employee
WHERE EmployeeId = 1;
SET SQL_SAFE_UPDATES = 1;
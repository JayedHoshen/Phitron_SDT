USE phitron;

CREATE table student (
	Roll varchar(5) PRIMARY KEY,
    Name varchar(50),
    Marks double
);

INSERT INTO student
	(Roll, Name, Marks) VALUES(102, 'Jayed khan', 3.04);
    
INSERT INTO student
(Roll, Name, Marks) VALUES(100, 'khan', 4);

SET SQL_SAFE_UPDATES = 0;
UPDATE student
SET Marks = 3.40
WHERE Roll = 102;
SET SQL_SAFE_UPDATES = 1;

SET SQL_SAFE_UPDATES = 0;
DELETE FROM student
WHERE Roll = 105;
SET SQL_SAFE_UPDATES = 1;

DROP table student;
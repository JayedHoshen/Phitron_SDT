-- 9) 
CREATE TABLE COURSE
(
	C_ID CHAR(6) PRIMARY KEY,
    C_TITLE VARCHAR(60),
    FOREIGN KEY(C_ID) REFERENCES INSTRUCTOR(I_ID) ON DELETE CASCADE
);

-- 8) 
SELECT MAX(SALARY)
FROM INSTRUCTOR
WHERE SALARY < (
	SELECT MAX(SALARY)
	FROM INSTRUCTOR
);
-- 7) 
SELECT INSTRUCTORID
FROM COURSE
GROUP BY INSTRUCTORID;

SELECT * 
FROM student 
ORDER BY name;
-- 5)
SELECT S.StudentID, S.Name
FROM Student S
	JOIN Enrollment E ON S.StudentID = E.StudentID
GROUP BY S.StudentID
HAVING COUNT(E.CourseID) > 2;
-- 4)
SELECT I.Name
FROM Instructor AS I
	JOIN Course AS C ON I.InstructorID = C.InstructorID
GROUP BY I.InstructorID
HAVING SUM(C.Credits) = (
    SELECT SUM(CREDITS) AS SM
	FROM COURSE
	GROUP BY InstructorID
	ORDER BY SM DESC
	LIMIT 1
);
-- 3) 
UPDATE Course
SET InstructorID = 1
WHERE CourseID = 3;
-- 2)
INSERT INTO Enrollment (StudentID, CourseID, EnrollmentDate)
VALUES (
    5,
    (SELECT CourseID 
     FROM Course 
     ORDER BY Credits DESC 
     LIMIT 1),
    CURDATE()
);

-- Insert some dummy data with Given code
CREATE TABLE Instructor (	
    InstructorID INT AUTO_INCREMENT PRIMARY KEY,	
    Name VARCHAR(255) NOT NULL,	
    Email VARCHAR(255) NOT NULL UNIQUE,	
    Phone VARCHAR(15),	
    Department VARCHAR(50)	
);	
INSERT INTO Instructor (InstructorID, Name, Email, Phone, Department) VALUES
(1,'Dr. Alice Smith', 'alice.smith@example.com', '01234567890', 'Computer Science'),
(2,'Dr. Bob Johnson', 'bob.johnson@example.com', '01234567891', 'Mathematics'),
(3,'Dr. Carol Lee', 'carol.lee@example.com', '01234567892', 'Physics'),
(6,'Dr. Alice Smith', 'blice.smith@example.com', '01234567890', 'CSE'),
(5,'Dr. Bob Johnson', 'job.johnson@example.com', '01234567891', 'CE'),
(4,'Dr. Carol Lee', 'carola.lee@example.com', '01234567892', 'EEE');

CREATE TABLE Course (	
    CourseID INT AUTO_INCREMENT PRIMARY KEY,	
    Title VARCHAR(255) NOT NULL,	
    Credits INT NOT NULL,	
    InstructorID INT,	
    FOREIGN KEY (InstructorID) REFERENCES Instructor(InstructorID)	
);	
INSERT INTO Course (Title, Credits, InstructorID) VALUES
('Introduction to Programming', 3, 1),
('Calculus I', 4, 2),
('Physics I', 3, 3),
('Data Structures', 4, 1),
('Linear Algebra', 5, 2),
('Mathematics', 4, 3);

CREATE TABLE Student (	
    StudentID INT AUTO_INCREMENT PRIMARY KEY,	
    Name VARCHAR(255) NOT NULL,	
    Email VARCHAR(255) NOT NULL UNIQUE,	
    Phone VARCHAR(15)	
);
INSERT INTO Student (Name, Email, Phone) VALUES
('John Doe', 'john.doe@example.com', '9876543210'),
('Jane Roe', 'jane.roe@example.com', '9876543211'),
('Mike Ross', 'mike.ross@example.com', '9876543212'),
('Rachel Zane', 'rachel.zane@example.com', '9876543213'),
('Harvey Specter', 'harvey.specter@example.com', '9876543214'),
('John Doe', 'joh.doe@example.com', '9876543210'),
('Jane Roe', 'jan.roe@example.com', '9876543211'),
('Mike Ross', 'mik.ross@example.com', '9876543212'),
('Rachel Zane', 'rache.zane@example.com', '9876543213'),
('Harvey Specter', 'harve.specter@example.com', '9876543214');

CREATE TABLE Enrollment (	
    EnrollmentID INT AUTO_INCREMENT PRIMARY KEY,	
    StudentID INT,	
    CourseID INT,	
    EnrollmentDate DATE NOT NULL,	
    FOREIGN KEY (StudentID) REFERENCES Student(StudentID),	
    FOREIGN KEY (CourseID) REFERENCES Course(CourseID)	
);	
INSERT INTO Enrollment (StudentID, CourseID, EnrollmentDate) VALUES
(1, 1, '2025-01-15'),
(2, 2, '2025-01-16'),
(3, 3, '2025-01-17'),
(4, 4, '2025-01-18'),
(5, 5, '2025-01-19'),
(1, 1, '2025-02-15'),
(2, 2, '2025-02-16'),
(3, 3, '2025-02-17'),
(4, 4, '2025-02-18'), 
(5, 5, '2025-02-19');
-- QS-1: Show the employee names and corresponding job_titles without using JOIN query
SELECT EMPLOYEES.FIRST_NAME, JOBS.JOB_TITLE
FROM EMPLOYEES, JOBS
WHERE EMPLOYEES.JOB_ID = JOBS.JOB_ID;

-- QS-2: Show the employee names and corresponding job_titles using JOIN query
SELECT EMPLOYEES.FIRST_NAME, JOBS.JOB_TITLE
FROM EMPLOYEES 
	JOIN JOBS ON EMPLOYEES.JOB_ID = JOBS.JOB_ID;

-- Show the name of the employee and the job_title who receives the maximum salary
SELECT EMPLOYEES.FIRST_NAME, JOBS.JOB_TITLE
FROM EMPLOYEES 
	JOIN JOBS ON EMPLOYEES.JOB_ID = JOBS.JOB_ID
WHERE SALARY = (SELECT MAX(SALARY)FROM EMPLOYEES );

-- Show the list of employee name and corresponding manager names
SELECT m.FIRST_NAME, e.FIRST_NAME
FROM EMPLOYEES AS e
	JOIN EMPLOYEES AS m
    ON e.EMPLOYEE_ID = m.MANAGER_ID;  
    
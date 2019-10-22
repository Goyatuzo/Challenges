SELECT 
  j.job_title,
  ROUND(SUM(j.salary) / COUNT(p.name), 2) as average_salary,
  COUNT(p.name) as total_people,
  ROUND(SUM(j.salary), 2) as total_salary
  FROM people p JOIN job j ON p.id = j.people_id
  GROUP BY job_title, salary
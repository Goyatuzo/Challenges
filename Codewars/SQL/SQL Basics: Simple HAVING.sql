SELECT age, COUNT(id) total_people
FROM people
GROUP BY age
HAVING COUNT(id) >= 10;
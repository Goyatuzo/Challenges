SELECT DISTINCT CITY
FROM            STATION
WHERE           STATION.CITY REGEXP '^[^aeiou].*[^aeiou]$';
SELECT  ROUND(SUM(STATION.LAT_N), 4)
FROM    STATION
WHERE   STATION.LAT_N > 38.7880 AND STATION.LAT_N < 137.2345;
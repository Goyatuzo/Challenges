SELECT  ROUND(ABS(MAX(STATION.LONG_W) - MAX(STATION.LAT_N)) + ABS(MIN(STATION.LONG_W) - MIN(STATION.LAT_N)), 4)
FROM    STATION
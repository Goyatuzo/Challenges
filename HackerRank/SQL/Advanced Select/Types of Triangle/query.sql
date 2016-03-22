# Not A Triangle
# IF ((A+B) <= C, 'Not A Triangle', IF ((A+C <= B, 'Not A Triangle', ELSE_STATEMENT)

# Equilateral
# IF (A=B, IF (B=C, 'Equilateral', 'Isosceles'), ELSE_STATEMENT)

# Isosceles
# IF (A=C, 'Isosceles', IF (B=C, 'Isosceles', ELSE_STATEMENT))


SELECT  IF ((A+B) <= C, 'Not A Triangle',
    IF (A+C <= B, 'Not A Triangle',
        IF (A=B, IF (B=C, 'Equilateral',
            'Isosceles'),
        IF (A=C, 'Isosceles',
            IF (B=C, 'Isosceles',
                'Scalene')))))
FROM    TRIANGLES;
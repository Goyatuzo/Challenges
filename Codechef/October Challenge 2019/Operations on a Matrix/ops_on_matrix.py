def ops_on_matrix(n, m, operations):
    # TODO: Figure out a mathematical solution to this instead of brute forcing
    boxes = []

    for i in range(n):
        boxes.append([0 for j in range(m)])

    for op in operations:
        # Apply to row
        for i in range(m):
            boxes[op[0] - 1][i] += 1

        for i in range(n):
            boxes[i][op[1] - 1] += 1

    count = 0

    for i in range(n):
        for j in range(m):
            if boxes[i][j] % 2 == 0:
                count += 1

    return count

if __name__ == '__main__':
    t = int(input())
    
    for i in range(t):
        n, m, q_count = input().split()

        q = []
        for j in range((int(q_count))):
            q.append([int(num) for num in input().split()])

        print(ops_on_matrix(int(n), int(m), q))
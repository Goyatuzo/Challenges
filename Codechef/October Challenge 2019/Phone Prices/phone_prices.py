def phone_prices(prices):
    count = 0

    for i in range(len(prices)):
        start = max(0, i - 5)
        curr = prices[i]
        comp = prices[start:i]

        if all(curr < j for j in comp):
            count += 1

    return count

if __name__ == '__main__':
    t = int(input())
    
    for i in range(t):
        n = int(input())
        p_list = input().strip().split(' ')
        p = [int(num) for num in p_list]

        print(phone_prices(p))
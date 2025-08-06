n = int(input())
ara = list(map(int, input().split()))

mn = float('inf')
for i in range(n):
    cnt = 0
    num = ara[i]
    while num % 2 == 0:
        num //= 2
        cnt += 1
    mn = min(mn, cnt)
print(mn)
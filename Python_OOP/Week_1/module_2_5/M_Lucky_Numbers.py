n, m = input().split()
n = int(n)
m = int(m)

cnt = 0
for i in range(n, m+1):
    x = i
    flag = True
    while x > 0:
        digit = x % 10
        if digit != 4 and digit != 7:
            flag = False
        x //= 10
    if flag is True:
        print(i, end=' ')
        cnt += 1
if cnt == 0:
    print('-1')

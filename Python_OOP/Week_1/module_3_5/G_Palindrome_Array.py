n = int(input())
ara = list(map(int, input().split()))
rev = ara[::-1]
if ara == rev:
    print('YES')
else:
    print('NO')

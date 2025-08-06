n, q = map(int, input().split())
ara = list(map(int, input().split()))

pre = [0] * n
pre[0] = ara[0]
for i in range(1, n):
    pre[i] = ara[i] + pre[i-1]

ans = 0
for i in range(q):
    l, r = map(int, input().split())
    
    l -= 1
    r -= 1
    
    if l == 0:
        ans = pre[r]
    else:
        ans = pre[r] - pre[l-1]
    print(ans)
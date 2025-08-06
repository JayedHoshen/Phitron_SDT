tc = int(input())
for t in range(tc):
    n = int(input())
    ara = list(map(int, input().split()))
    
    sum = float('inf')
    for i in range(n-1):
        for j in range(i+1, n):
            sum = min(sum, (ara[i]+ara[j]+j-i))
    print(sum)
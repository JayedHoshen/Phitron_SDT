from collections import Counter

n = int(input())
ara = list(map(int, input().split()))

cnt = Counter(ara)
ans = 0

for x, freq in cnt.items():
    if freq == x:
        continue
    elif freq > x:
        ans += (freq-x)
    else:
        ans += freq
print(ans)
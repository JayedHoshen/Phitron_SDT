s = input().split()
for i in range(len(s)):
    x = s[i]
    if i == (len(s)-1):
        print(x[::-1])
    else:
        print(x[::-1], end=' ')
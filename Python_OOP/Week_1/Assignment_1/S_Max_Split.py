s = input()
lr = cnt = start = 0
ans = []
for i in range(len(s)):
    if s[i] == 'L':
        lr += 1
    else:
        lr -= 1
    
    if lr == 0:
        cnt += 1
        ans.append(s[start:i+1])
        start = i + 1
print(cnt)
for i in ans:
    print(i)
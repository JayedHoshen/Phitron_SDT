n = int(input())
ara = list(map(int, input().split()))

mn = mx = ara[0]
mn_indx = mx_indx = 0
for i in range(n):
    if ara[i] < mn:
        mn = ara[i]
        mn_indx = i
    elif ara[i] > mx:
        mx = ara[i]
        mx_indx = i
ara[mn_indx], ara[mx_indx] = ara[mx_indx], ara[mn_indx]
print(' '.join(map(str, ara)))
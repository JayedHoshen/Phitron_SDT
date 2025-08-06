n = int(input())
ara = list(map(int, input().split()))

min_val =  max_val = ara[0]
mn_index =  mx_index = 0

for i in range(n):
    if ara[i] < min_val:
        min_val = ara[i]
        mn_index = i
    if ara[i] > max_val:
        max_val = ara[i]
        mx_index = i
ara[mn_index], ara[mx_index] = ara[mx_index], ara[mn_index]

print(' '.join(map(str, ara)))
def sum(num1, num2, num3 = 0, num4 = 0, num5 = 0):
    result = num1 + num2 + num3 + num4 + num5
    return result
total = sum(1, 2, 3, 4, 5)
print(total)

# args
def variable_sum(num1, num2, *num):
    print(num)
    sum = 0
    for i in num:
        print(i)
        sum += i
    return sum
total = variable_sum(10, 20, 30, 40, 50, 60, 70, 80, 90)
print('total sum = ', total)

# normally args
def fun(*args):
    print(args)
fun(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
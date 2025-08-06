def full_name(first, last):
    name = f'Full name is = {first} {last}'
    return name
# name = full_name('Alu', 'kodu') #take parameters in order(serial wise)
name = full_name(last = 'kodu', first = 'alu') #take parameters without order
print(name)

# def fun(**kargs)
def fun(first, middle, last, **extra):
    name = f'{first} {middle} {last}'
    # print(extra['extra1'])
    for key, value in extra.items():
        print(key, '=', value)
    return name
name = fun(first = 'mohammad', middle = 'Jayed', last = 'Hossain', extra1 = 'extra', extra2 = 'kisu', extra3 = 'delam')
print(name)

# def function_name(num1, num2, *args, **kargs):  #we can define that

# multiple value returns from an array
def return_multiple(num1, num2):
    sum = num1 + num2
    mul = num1 * num2
    sub = num1 - num2
    # return sum, mul, sub #tuple
    return [sum, mul, sub] #list
result = return_multiple(10, 5)
print(result)

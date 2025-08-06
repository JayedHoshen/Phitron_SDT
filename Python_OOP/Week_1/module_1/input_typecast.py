# n = input("Please enter a number = ")
# m = input("Enter another number = ")

# total = n+m
# print(total)

# total = int(n) + int(m) #type casting
# print(total)

""" home task:
1) convert string to int
2) convert decimal to string
3) python int vs float 
"""
#-------------> convert string to int
number_int = 123
string_from_int = str(number_int)
print(string_from_int)
print(type(string_from_int))

number_float = 3.14
string_from_float = str(number_float)
print(string_from_float)
print(type(string_from_float))

number = 456
string_from_fstring = f"{number}"
print(string_from_fstring)
print(type(string_from_fstring))

number = 789
string_from_format = "{}".format(number)
print(string_from_format)
print(type(string_from_format))

number = 1011 
string_from_percent = "%s" % number # old style string format
print(string_from_percent)
print(type(string_from_percent))
    
#-----------> convert decimal to string
from decimal import Decimal
decimal_number = Decimal('97.17312522036036245646')
string_representation = str(decimal_number)
print(string_representation)
print(type(string_representation))

n = 97.17312522036036245646 # have a bug
print(n)
sn = str(n)
print(sn)
print(type(sn))

#--------------> python int vs float
x = 3.14
y = int(x)  # y will be 3 (truncates the decimal part)
a = 5
b = float(a) # b will be 5.0
print(x, "->", y)
print(a, "->", b)
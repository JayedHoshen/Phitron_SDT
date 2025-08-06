""" 
WAT WE LEARNED TODAY
1) Python setup
2) Variable
3) Operators
4) Conditionals: if -elif -else
5) while loop
6) for loop 
7) Commenting
8) input
9) type casting
"""

""" 
HOMEWORK
1. float (how to work a float number in python)
2. take 3 numbers from the user and give me the largest number as output
3. take 3 numbers from the user and give me the sum of the numbers
4. run a loop and show me the odd numbers between 39 to 68
5. Grade calculator in python (if elif else)
"""
# -------> 5) grade calculate
while True:
    x = input("Enter 0 to exit (otherwise continue) = ")
    if x == '0':
        break
    
    marks = input("Enter a marks = ")
    marks = int(marks)
    if marks >= 80:
        print("A+")
    elif marks >= 75:
        print("A")
    elif marks >= 70:
        print("A-")
    elif marks >= 65:
        print("B+")
    elif marks >= 60:
        print("B")
    elif marks >= 55:
        print("B-")
    elif marks >= 50:
        print("C+")
    elif marks >= 45:
        print("C")
    elif marks >= 40:
        print("D")
    else:
        print("F")


# ---------> 4) odd numbers between 39 to 68
# for i in range(39, 69, 2):
#     print(i)

# -------> 3) take 3 numbers and summation their
# n1 = input("Enter first number = ")
# n2 = input("Enter second number = ")
# n3 = input("Enter third number = ")
# sum = int(n1) + int(n2) + int(n3)
# print(sum)

# ------> 2) take 3 numbers and find largest
# x = input("Enter first number = ")
# y = input("Enter second number = ")
# z = input("Enter third number = ")

# if x > y and x > z:
#     print("First number is largest")
# elif y > x and y > z:
#     print("Second number is largest")
# elif z > x and z > y:
#     print("Third number is largest")    
# else:
#     print("Numbers are equal")

# ------> 1) working with float numbers
#Creating Floats:
my_float = 3.14 # Direct Assignment
another_float = -0.5 # Direct Assignment
result = 10 / 2  # result will be 5.0 (float)

#  Converting to Floats
integer_value = 5
float_from_int = float(integer_value)  # float_from_int will be 5.0
string_value = "2.718"
float_from_string = float(string_value)  # float_from_string will be 2.718
# print(float_from_int)
# print(float_from_string)

# Performing Operations
a = 1.5
b = 2.0
sum_val = a + b  # 3.5
product_val = a * b # 3.0
# print(product_val)

# Formatting Floats
price = 19.9987
formatted_price = f"The price is: {price:.2f}"# Output: "The price is: 20.00"
value = 3.14159
rounded_value = round(value, 2)  # rounded_value will be 3.14
# print(formatted_price)
# print(rounded_value)

# Precision Considerations
from decimal import Decimal
d1 = Decimal('0.1')
d2 = Decimal('0.2')
sum_decimal = d1 + d2  # sum_decimal will be Decimal('0.3')
# print(sum_decimal)
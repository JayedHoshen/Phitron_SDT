# in, not, not in, is, is not
# >, <, >=, <=, ==, !=
#  and, or

a = 20

if a > 10:
    print("a is greater than 10")
elif a < 10:
    print("a is less than 10")
else: 
    print("a is equal to 10")
    
b = False
if b is not False:
    print("b is not false")
else:
    print("b is False")

if b == True:
    print("b is true")
else: 
    print("b is not true")
    
# --------------------->
a = 10
b = True
if b is True and a > 10:
    print("both are true")
elif b is not True or a <= 10:
    print("b is false")
    if a < 10:
        print("nested: a is less than 10")
    elif a == 10:
        print("Nested: a is equal to 10")
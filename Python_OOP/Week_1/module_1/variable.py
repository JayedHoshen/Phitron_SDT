# ctrl + / : Single line comment
# Alt + shift + A: doc string or multi line comment
""" 
This is
Multiline 
Comment's
"""

age = 35
name = "Jayed khan"
interest_rate = 3.5
is_valid = True
is_not_valid = False

print(age)
print(type(age))
print(type(is_valid))

print("String " + " Concatenation")
print("Name: ", name, ", Age: ", age)
text = f"Name {name} Age is {age} and interest rate is {interest_rate} but is not valid {is_not_valid}"
print(text)
print(type(text))

""" 
list -> []
tuple -> ()
set -> {}
set: unique items collection. No duplicate
"""
numbers = [12, 38, 86, 82, 82, 84, 8]
print('list', numbers)
numbers_set = set(numbers)
print('set', numbers_set)
numbers_set.add(55)
numbers_set.add(12)
numbers_set.add(12)
numbers_set.add(12)
print(numbers_set)

#numbers_set[1] = 5
for item in numbers_set:
    print(item)

if 9 in numbers_set:
    print('9 exits')
elif 86 in numbers_set:
    print('86 is exits')
    
A = {1, 3, 5, 7}
B = {1, 2, 3, 4, 5}
print(A & B)
print(A | B)
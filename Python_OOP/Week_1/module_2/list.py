# list, array, collection is same (simple terms)
# index =  0   1   2   3   4   5   6   7   8   9
numbers = [10, 20, 30, 40, 50, 15, 25, 35, 55, 87]
# index = -10  -9  -8  -7  -6  -5  -4  -3  -2  -1
print(numbers[3], numbers[-3])

#list(start : end) #start from the start index and stop before the end index
print(numbers[2:5])
print(numbers[1:6])

#list(start : end : step)
print(numbers[1:7:1])
print(numbers[1:7:2])
print(numbers[2:8:-1])
print(numbers[7:1:-1])
print(numbers[7:1:-2])
print(numbers[3:])
print(numbers[:9])
print(numbers[:]) # shortcut to copy a list
print(numbers[::-1]) # shortcut ot reverse a list
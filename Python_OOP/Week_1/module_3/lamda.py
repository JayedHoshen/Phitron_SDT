# lamda
# def doubled(num):
#     return num*2
doubled = lambda num : num * 2
squared = lambda num: num * num
result = doubled(12)
output = squared(8)
# print(result, output)

add = lambda x, y: x + y
sum = add(10, 20)
# print(sum)

numbers = [12, 56, 98, 78, 56, 12, 6, 98]
# doubled_nums = map(doubled, numbers)
doubled_nums = map(lambda x : x*2, numbers)
squared_nums = map(lambda x : x*x, numbers)
print(numbers)
# print(list(doubled_nums))
print(list(squared_nums))

actors = [
    {'name': 'sabana', 'age': 65},
    {'name': 'sabnoor', 'age': 45},
    {'name': 'sabila noor', 'age': 30},
    {'name': 'srabonti', 'age': 38},
    {'name': 'shaon', 'age': 47},
]

juniors = filter(lambda actor : actor['age'] < 40, actors)
Fivers = filter(lambda actor : actor['age'] % 5 == 0, actors)
# print(list(juniors))
print(list(Fivers))
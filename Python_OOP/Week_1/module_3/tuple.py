def multiple():
    return 3, 4
# print(multiple())
things = 'pen', 'tripod', 'water bottle', 'charger', 'phone', 'web cam', 'sunglass'
# print(type(things))
# print(things[0])
# print(things[-2])
# print(things[2:6])
if 'phone' in things:
    print('exits')
for item in things:
    print(item)

# things[0] = 'wagon'
# print(things)

#ignore
print(len(things))
mega = ([2, 3, 4], [6, 8, 9, 5])
print(type(mega))
print(mega[0])
mega[0][1] = 200
print(mega)
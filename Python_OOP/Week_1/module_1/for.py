# declare an array with values
num = [10, 20, 30, 40, 50] 
for i in num:
    print(i)

text = 'Jokhon khushi tokhan'
for i in text:
    print(i)
    
# range based for loop [range(start, stop, step)]
for i in range(1, 11):  
    print(i) # print 1 to 10

for i in range(1, 10, 2):
    print(i) # print odd number 1 to 9
    
friends = ['Abdullah', 'Salam', 'Khaled', 'Agun']
for friend in friends:
    print(friend)
    
friends = ['Abdullah', 'Salam', 'Khaled', 'Agun'] 
for i, friend in enumerate(friends): # accessing with index
    print(f"friends[{i}] = {friend}")
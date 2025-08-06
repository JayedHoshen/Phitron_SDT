# create a pen class that have 3 instance attribute
class Pen:
    def __init__(self, name, color, price):
        self.name = name
        self.color = color
        self.price = price
        
    def add(self, *n):
        print(n)

my_pen = Pen('Matador', 'Black', 5)
print(my_pen.name, my_pen.color, my_pen.price)

her_pen = Pen('Cute', 'white', 10)
print(her_pen.name, her_pen.color, her_pen.price)

your_pen = Pen('Walton', 'Red', 20)
print(your_pen.name, your_pen.color, your_pen.price)

my_pen.add(1, 2, 3, 4, 5)
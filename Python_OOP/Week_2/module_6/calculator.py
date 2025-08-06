# Create a simple calculator in python language
class Calculator:
    brand = 'Casio FX991'
    
    def add(self, num1, num2):
        sum = num1 + num2
        return sum
    
    def deduct(self, num1, num2):
        sub = num1 - num2
        return sub
    
    def multiply(self, num1, num2):
        mul = num1 * num2
        return mul
    
    def divide(self, num1, num2):
        div = num1 / num2
        return div
    
    def i_divide(self, num1, num2):
        div = num1 // num2
        return div

# Create object
my_class = Calculator()

print('Summation = ', my_class.add(10, 20))
print('Subtraction = ', my_class.deduct(50, 10))
print('Multiplying = ', my_class.multiply(5,5))
print('Division = ', my_class.divide(26,3))
print('Integer division = ', my_class.i_divide(26, 3))
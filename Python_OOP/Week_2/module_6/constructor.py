class Phone:
    manufactured = 'China'
    
    # constructor
    def __init__(s, owner, brand, price):
        s.owner = owner
        s.brand = brand
        s.price = price
        
    def send_sms(self, phone, sms):
        text = f'sending to: {phone} -> {sms}'
        print(text)

my_phone = Phone('kala chan', 'oppo', 9800)
print(my_phone.owner, my_phone.brand, my_phone.price)

her_phone = Phone('she amar jaan', 'iphone', 120000)
print(her_phone.owner, her_phone.brand, her_phone.price)

dad_phone = Phone('abbbu ', 'Nokia', 2200)
print(dad_phone.owner, dad_phone.brand, dad_phone.price)
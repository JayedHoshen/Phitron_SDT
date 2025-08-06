def call():
    print("Calling someone, i don't know!")
    return 'call done'

class Phone:
    price = 12000
    color = 'blue'
    brand = 'samsung'
    features = ['camera', 'speaker', 'hammer']
    
    def call(self):
        print('calling one person')
    
    def send_SMS(s, phone, sms):
        text = f'sending SMS to : {phone} and {sms}'
        return text

my_phone = Phone()
print(my_phone.features)
my_phone.call()
result = my_phone.send_SMS(41524, 'Missy, I missed to miss you')
print(result)
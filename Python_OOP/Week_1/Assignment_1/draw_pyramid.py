import pyautogui
from time import sleep

n = int(input())

sleep(10)
for i in range(1, n+1):
    for j in range(i):
        pyautogui.write('#', interval = 0.25)
    pyautogui.press('enter')
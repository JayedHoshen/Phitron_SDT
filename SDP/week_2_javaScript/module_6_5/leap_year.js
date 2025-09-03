// problem-4: calculate leap year
const y = 2024;

if(y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) console.log('Leap year');
else console.log('Not leap year');

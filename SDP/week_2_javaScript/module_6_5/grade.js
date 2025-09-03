// problem-1: grade calculate
// 0-32 = F
// 33-39 = D
// 40-49 = C 
// 50-59 = B 
// 60-69 = A- 
// 70-79 = A 
// 80-100 = A+
// else invalid marks

const marks = 50;

if(marks >= 0 && marks <= 32) console.log('F');
else if(marks >= 33 && marks <= 39) console.log('D');
else if(marks >= 40 && marks <= 49) console.log('C');
else if(marks >= 50 && marks <= 59) console.log('B');
else if(marks >= 60 && marks <= 69) console.log('A-');
else if(marks >= 70 && marks <= 79) console.log('A');
else if(marks >= 80 && marks <= 100) console.log('A+');
else console.log('invalid marks');
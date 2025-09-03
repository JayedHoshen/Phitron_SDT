// problem-3: sorting an array
const a = [2, 1, 3, 4, 9, 5, 15, 6, 8, 7, 11, 19, 20, 10, 18, 12, 17, 13, 14, 16];

for(let i = 0; i < a.length-1; i++) {
    for(let j = i+1; j < a.length; j++) {
        if(a[i] > a[j]) {
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
    } 
}

console.log(...a);
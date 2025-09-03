// 02) print highest element from an string array
const bigFriend = (array) => {
    let mx = array[0];
    for(let i = 0; i < array.length; i++) {
        let element = array[i];
        if(element.length > mx.length) mx = element;
    }
    return mx;
};

const friends = ['Rahim', 'Korim', 'Salam', 'Jobbar', 'Sofik', 'Sofikullah'];
const result = bigFriend(friends);
console.log(result, 'is the biggest name.');


// // 01) print even/odd number from an array
// const oddEven = (array) => {
//     let even = [], odd = [];
//     for(let i = 0; i < array.length; i++) {
//         let element = array[i];
//         if(element % 2) odd.push(element);
//         else even.push(element);
//     }
//     return [even, odd];
// };

// const numbers = [1, 2, 3, 4, 5, 8, 9, 29, 19, 9, 4, 2, 10, 1, 2, 3, 4, 5];
// const [even, odd] = oddEven(numbers);
// console.log('Total = ', numbers.length, '\nEven = ', even.length, 'and', 'Odd = ', odd.length);
// console.log(`Odd = ${odd}`, `\nEven = ${even}`);

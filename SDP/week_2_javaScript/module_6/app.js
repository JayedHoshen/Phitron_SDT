// let, const (declare a variable, replace to var)
// const name = 'jayed';
// name = 'hossain';
// console.log(name); // have an error


// let name = 'Jayed khan';
// let cName = 'Bangladesh';
// console.log(name);

// Tamplet litarels (``) 
// const countryName = `Mr. ${name}, come from ${cName}.`;
// console.log(countryName);

// Spread Operators (...)
// const ara = [1, 2, 3, 4, 5, 6, 7];
// const ara2 = [8, 9, 10, 11, 12, 13];
// console.log(...ara, ...ara2);

// Distructuring object
// const myObj = {
//     name: 'Jayed',
//     age: 10,
//     dpt: 'CSE'
// }
// const {age, name, dpt} = myObj;


// // Distructring array
// const names = ['Jayed', 10, 'CSE'];
// const [a, b, c] = names;
// console.log(a, b, c);

// normal function
// function sum(num1, num2) {
//     const result = num1 + num2;
//     return result;
// }
// const output = sum(15, 20);
// console.log(output);

// arrow function in ES6
// const sum2 = (n1, n2) => n1 + n2; // short-cut
// const sum2 = (n1, n2) => {
//     return n1 + n2;
// }
// const output2 = sum2(20.22, 15);
// console.log(output2);


// array declare
const products = [
    {id: 1, name: 'xiaomi', description: 'This is xiaomi', price: 700, color: 'black'},
    {id: 2, name: 'Iphone', description: 'This is Iphone', price: 800, color: 'golden'},
    {id: 3, name: 'xiaomi', description: 'This is xiaomi', price: 500, color: 'golden'},
    {id: 4, name: 'xiaomi', description: 'This is xiaomi', price: 1000, color: 'black'},
    {id: 5, name: 'Iphone', description: 'This is Iphone', price: 1800, color: 'gray'},
    {id: 6, name: 'xiaomi', description: 'This is xiaomi', price: 600, color: 'black'},
]

// normally find a product
// for(let i = 0; i < products.length; i++) {
//     const element = products[i];
//     if(element.id == 3) console.log(element);
// }

// using find() function find a product (when not found return undefined)
// const result = products.find(pd => pd.id == 1);
// console.log(result);

// using filter() function to find similar product (when not found return [])
// const result = products.filter(product => product.color == 'black');
// console.log(result);

// using map
// const result = products.map(product => product.id+10);
// console.log(result);

// using forEach
products.forEach(product => {
    console.log(product.id, product.name, "->" , product.color);
});

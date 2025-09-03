// problem-9:
const monthlySaving = (array, liveCost) => {
    if(!Array.isArray(array) || typeof liveCost != 'number') return 'invalid input';

    let sum = 0;
    for(let i = 0; i < array.length; i++) {
        let element = array[i];
        if(element >= 3000) element -= (element*0.2);
        sum += element;
    }

    let saving = sum - liveCost;
    if(saving < 0) return "earn more";
    else return saving;
};

const ara = [900, 2700, 3400, 2990, 1000];
const livingCost = 10000;

const result = monthlySaving(ara, livingCost);
console.log(result);
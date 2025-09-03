// problem-6: maximum name find
const mxName = (array) => {
    let mx = array[0];
    for(let i = 0; i < array.length; i++) {
        if(mx.length < array[i].length) mx = array[i];
    }
    return mx;
};

const friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
const result = mxName(friends);
console.log(result);
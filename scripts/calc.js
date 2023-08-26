const addition = (...rest) => {
    let sum = 0;
    for (let i of rest){
        sum += i;
    }
    return sum;}
 

// function addition(a, b){
//     return a + b;
// }


// const sumRest = (a, b, c,...rest) => {
//     let sum = a + b + c;
//     for (let i of rest) {
//         sum += i;
//     }
//     return sum;
// }
module.exports = addition;
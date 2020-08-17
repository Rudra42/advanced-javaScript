const numbers = [3,6,7,8];
// const output = [];

// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// 

// const square = element => element * element;

// const result = numbers.map(x=>x*x);

// function square(element){
//     return element * element;
// }

// const result = numbers.map(function(element,index,array){
//     return element * element;
     
// })

// console.log(result);

// console.log(output);

const bigger = numbers.filter(x => x < 5);

const isThere = numbers.find(x => x>5);

console.log(isThere);
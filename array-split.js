const numbers = [1,2,3,4,5,6,7,8];


const remove = numbers.splice(2,3,77,18);
const part = numbers.slice(2,5);
console.log(remove);
console.log(numbers);
console.log(part);

const together = numbers.join(" ");
console.log(together);
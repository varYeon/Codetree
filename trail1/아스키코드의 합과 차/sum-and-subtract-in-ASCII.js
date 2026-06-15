const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split(' ');

const sum = input[0].charCodeAt() + input[1].charCodeAt();
const divide = Math.abs(input[0].charCodeAt() - input[1].charCodeAt());

console.log(sum, divide);

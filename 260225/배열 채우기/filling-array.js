const fs = require('fs');
let arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const resultArr = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]===0) break;
    else resultArr.push(arr[i]);
}

console.log(resultArr.reverse().join(' '));
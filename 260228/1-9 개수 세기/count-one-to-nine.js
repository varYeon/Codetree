const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
let arr = input[1].split(" ").map(Number);

for(let i=1; i<=9; i++){
    let count = 0;
    for(let j=0; j<n; j++){
        if(arr[j]===i) count++;
    }
    console.log(count);
}

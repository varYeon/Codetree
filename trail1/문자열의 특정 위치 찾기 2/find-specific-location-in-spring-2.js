const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let arr = ["apple", "banana", "grape", "blueberry", "orange"];

let result = [];
let count = 0;

for (let i = 0; i < 5; i++) {
    const str = [...arr[i]];

    if (str[2] === input || str[3] === input) {
        result.push(arr[i]);
        count++;
    }
}


if(count !== 0) console.log(result.join('\n'));
console.log(count);

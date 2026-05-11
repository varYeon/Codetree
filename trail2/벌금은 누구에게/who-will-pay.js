const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penalizedPersons = input.slice(1, m + 1).map(Number);

const penalties = Array(n + 1).fill(0) // idx = 0은 없는 값

let result = -1;

for (let i = 0; i < m; i++) {
    const person = penalizedPersons[i];
    penalties[person] += 1;
    
    if (penalties[person] >= k) {
        result = person;
        break;
    }
}

console.log(result);

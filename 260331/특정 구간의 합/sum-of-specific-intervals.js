const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(" ").map(Number);
const A = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

function sum(n, m, A, queries) {
    for (let i = 0; i < m; i++) {
        const start = queries[i][0] - 1;
        const finish = queries[i][1] - 1;

        let sum = 0;

        for (let j = start; j <= finish; j++) {
            sum += A[j];
        }

        console.log(sum);
    }
}

sum(n, m, A, queries);

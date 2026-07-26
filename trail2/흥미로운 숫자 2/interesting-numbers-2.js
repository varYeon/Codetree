const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x, y] = input[0].split(" ").map(Number);

let cnt = 0;

for (let i = x; i <= y; i++) {
    const num = i.toString().split('');
    const type = [];
    type.push(num[0]);

    for (let j = 1; j < num.length; j++) {
        if (!type.includes(num[j])) {
            type.push(num[j]);
        }
    }
    
    if (type.length === 2) cnt++;
}


console.log(cnt);

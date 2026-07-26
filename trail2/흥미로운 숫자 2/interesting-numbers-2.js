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

    if (type.length !== 2) continue;
    // type.length -> 11188도 2이고, 11118도 2이다

    let firstCnt = 0;
    for (let i = 0; i <num.length; i++) {
        if (type[0] === num[i]) firstCnt++;
    }

    if (firstCnt === 1 || firstCnt === num.length - 1) {
        cnt++;
    }
}



console.log(cnt);

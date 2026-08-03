const fs = require('fs');
let inputs = fs.readFileSync(0).toString().trim().split('\n');

let str = [];
let cnt = 0;

for (let i = 0; ; i++) {
    if (inputs[i] === '0') break;
    else {
        cnt++;
        str.push(inputs[i]);
    }
}

console.log(cnt);
for (let i = 0; i < cnt; i += 2) {
    console.log(str[i]);
}

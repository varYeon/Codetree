const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

for (let i = n - 1; i >= 0; i--) {
    let str = [];
    for (let j = 0; j <= i; j++) {
        let part = ''
        for (let k = 0; k <= i; k++) {
            part += '*';
        }
        str.push(part);
    }
    console.log(str.join(' '));
}

const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

function printNumbers(n) {
    let num = 1;
    for (let i = 0; i < n; i++) {
        let str = '';
        for (let j = 0; j < n; j++) {
            str += num + ' ';
            if (num < 9) num++;
            else num = 1;
        }
        console.log(str);
    }
}

printNumbers(n);

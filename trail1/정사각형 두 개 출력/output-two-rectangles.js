const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

function star() {
    for (let i = 0; i < n; i++) {
        let str = '';

        for (let j = 0; j < n; j++) {
            str += '*';
        }

        console.log(str);

        // return str;
    }
}

star();
console.log('')
star();

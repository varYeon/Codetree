const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());

let str = "";

for (let i = n; i > 0; i--) {
    str = "";
    for (let j = 0; j < n - i + 1; j++) {
        str += "* ";
    }
    console.log(str);
}

for (let i = 1; i < n; i++) {
    str = "";
    for (let j = 0; j < n - i; j++) {
        str += "* ";
    }
    console.log(str);
}

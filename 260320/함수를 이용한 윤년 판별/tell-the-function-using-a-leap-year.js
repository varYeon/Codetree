const fs = require("fs");
const y = Number(fs.readFileSync(0).toString().trim());

function leapYear(y) {
    if (y % 100 === 0 && y % 400 !== 0) return 'false';
    else if (y % 4 === 0) return 'true';
    else return 'false'
}

console.log(leapYear(y));

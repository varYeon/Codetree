const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);

function leapYear(y) {
    if (y % 100 === 0 && y % 400 !== 0) return false;
    else if (y % 4 === 0) return true;
    else return false;
}

function monthOk(m) {
    return 1 <= m && m <= 12;
}

function dayOk(y, m, d) {
    if (m === 1 || m === 3 || m === 5 || m === 7 || m === 8 || m === 10 || m === 12) return 1 <= d && d <= 31
    else if (m === 2) {
        return leapYear(y) ? 1 <= d && d <= 291 <= d && d <= 28;
    }
    else if (m === 4 || m === 6 || m === 9 || m === 11) return 1 <= d && d <= 30;
    else return false;
}

function findDate(y, m, d) {
    return monthOk(m) && dayOk(y, m, d);
}

function findSeason(y, m, d) {
    if (findDate(y, m, d)) {
        if (m >= 3 && m <= 5) return 'Spring';
        else if (m >= 6 && m <= 8) return 'Summer';
        else if (m >= 9 && m <= 11) return 'Fall';
        else if (m === 12 || m === 1 || m === 2) return 'Winter';
    }
    else return -1;
}

console.log(findSeason(year, month, day));

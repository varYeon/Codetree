const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const str = input[0];

function palindrome(str) {
    const arr = str.split('');
    let ok = true;

    for (let i = 0; i < arr.length / 2; i++) {
        if (arr[i] !== arr[arr.length - 1 - i]) {
            ok = false;
            break;
        }
    }

    if (ok) return 'Yes'
    else return 'No';
}

console.log(palindrome(str));

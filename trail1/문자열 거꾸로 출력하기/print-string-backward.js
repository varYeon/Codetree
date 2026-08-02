const fs = require('fs');
let inputs = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < inputs.length; i++) {
    const str = inputs[i].split('');
    let newStr = [];

    if (str.join('') === 'END') break;
    else {
        for (let j = str.length - 1; j >= 0; j--) {
            newStr.push(str[j]);
        }
        console.log(newStr.join(''));
    }
}

const fs = require('fs');
let n = Number(fs.readFileSync(0).toString().trim());


for (let i = 0; i < n; i++) {
    const arr2d = [];
    let a = 1 + 1*i;

    for (let j = 0; j < n; j++) {
        arr2d.push(a);
        a += n;
    }

    console.log(arr2d.join(' '));
}

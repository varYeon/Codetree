const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

for(let i=0; i<input.length; i++){
    if(input[i]<25) console.log('Higher');
    else if(input[i]>25) console.log('Lower');
    else console.log('Good');
}
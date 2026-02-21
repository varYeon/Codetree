const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

for(let i=0; i<=input.length; i++){
    if(input[i]<25) console.log('Higher');
    else if(input[i]>25) console.log('Lower');
    else if(input[i]==25) console.log('Good');
    // Number 안 했으므로 === 아닌 == 사용
}
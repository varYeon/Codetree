const fs = require('fs');
let line = fs.readFileSync(0).toString().trim().split('\n');
//[ '1 2 3 4', '7 8 9 10', '11 12 13 14', '15 16 17 18' ]

for(let i=0; i<4; i++){
    const a = line[i].split(' ').map(Number); //[ 1, 2, 3, 4 ]
    let sum = 0; 

    for(let j=0; j<a.length; j++){
        sum += a[j];
    }
    console.log(sum);
}
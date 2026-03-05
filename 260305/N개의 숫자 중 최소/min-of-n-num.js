const fs = require('fs');
let input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const nums = input[1].split(' ').map(Number);

let small = nums[0];
let count = 0;

for(let i=0; i<n; i++){
    if(small>=nums[i]) {
        small=nums[i];
        }
}
for(let i=0; i<n; i++){
    if(small===nums[i]) {
        count++;
        }
}

console.log(small, count);

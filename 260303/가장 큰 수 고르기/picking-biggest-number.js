const fs = require('fs');
let nums = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let big = nums[0];

for(let i=0; i<nums.length; i++){
    if(big<nums[i]) big=nums[i];
}

console.log(big);

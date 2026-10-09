const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const commands = input.slice(1);

const arr = []; // 동적 배열

for (let i = 0; i < n; i++) {
    const [command, arg] = commands[i].split(' ');

    if (command === 'push_back') arr.push(Number(arg));
    else if (command === 'pop_back') arr.pop();
    else if (command === 'size') console.log(arr.length);
    else if (command === 'get') console.log(arr[Number(arg) - 1]);
}

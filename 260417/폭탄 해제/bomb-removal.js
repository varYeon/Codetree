const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [u_code, l_color, time] = input[0].split(' ');

class Bomb {
    constructor(u_code, l_color, time) {
        this.u_code = u_code;
        this.l_color = l_color;
        this.time = time;
    }
}

const bomb1 = new Bomb(u_code, l_color, time);

console.log(`code : ${bomb1.u_code}
color : ${bomb1.l_color}
second : ${bomb1.time} `);

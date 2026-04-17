const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [s_code, m_point, time] = input[0].split(' ');

class Meet {
    constructor(s_code, m_point, time) {
        this.s_code = s_code;
        this.m_point = m_point;
        this.time = time;
    }
}

const meet1 = new Meet(s_code, m_point, time);
console.log("secret code :", meet1.s_code)
console.log("meeting point :", meet1.m_point)
console.log("time :", meet1.time)

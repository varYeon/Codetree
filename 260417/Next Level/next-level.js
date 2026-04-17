const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [user_id, levelStr] = input[0].split(' ');
const level = parseInt(levelStr);

class UserInfo {
    constructor(id, level) {
        this.id = id;
        this.level = level;
    }
}

const user1 = new UserInfo("codetree", 10);
const user2 = new UserInfo(user_id, level);

console.log(`user ${user1.id} lv ${user1.level}`)
console.log(`user ${user2.id} lv ${user2.level}`)

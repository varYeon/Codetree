const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split('\n');

const codenames = [];
const scores = [];

for (let i = 0; i < input.length; i++) {
    const [codename, score] = input[i].split(' ');

    codenames.push(codename);
    scores.push(parseInt(score, 10));
}

class Agent {
    constructor(codename, score) { // 단수
        this.codename = codename;
        this.score = score;
    }
}

const idx = scores.indexOf(Math.min(...scores));

const agent = new Agent(codenames[idx], scores[idx]);
console.log(agent.codename, agent.score)
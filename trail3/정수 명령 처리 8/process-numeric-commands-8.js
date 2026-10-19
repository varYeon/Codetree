const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const commands = input.slice(1, n + 1);

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

// 이중 연결 리스트 클래스
class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.nodeNum = 0;
    }

    push_front(newData) { // 1.
        const newNode = new Node(newData);
        newNode.next = this.head;

        if (this.head != null) {
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.prev = null;

        this.nodeNum += 1;
    }

    push_back(newData) { // 2.
        const newNode = new Node(newData);
        newNode.prev = this.tail;

        if (this.tail != null) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        newNode.next = null;

        this.nodeNum += 1;
    }

    pop_front() { // 3.
        if (this.head == null) {
            console.log("List is empty");
        } else if (this.head.next == null) {
            const temp = this.head;

            this.head = null;
            this.tail = null;
            this.nodeNum = 0;

            return temp.data;
        } else {
            const temp = this.head;
            temp.next.prev = null;
            this.head = temp.next;
            temp.next = null;

            this.nodeNum -= 1;
            return temp.data;
        }
    }

    pop_back() { // 4.
        if (this.tail == null) {
            console.log("List is empty");
        } else if (this.tail.prev == null) {
            const temp = this.tail;

            this.head = null;
            this.tail = null;
            this.nodeNum = 0;

            return temp.data;
        } else {
            const temp = this.tail;
            temp.prev.next = null;
            this.tail = temp.prev;
            temp.prev = null;

            this.nodeNum -= 1;
            return temp.data;
        }
    }

    size() { // 5.
        return this.nodeNum;
    }

    empty() { // 6.
        return this.nodeNum == 0;
    }

    front() { // 7.
        if (this.head == null) {
            console.log("List is empty");
        } else {
            return this.head.data;
        }
    }

    back() { // 8.
        if (this.tail == null) {
            console.log("List is empty");
        } else {
            return this.tail.data;
        }
    }
}

const l = new DoublyLinkedList();

for (let i = 0; i < n; i++) {
    const [str, num] = commands[i].split(' ');
    const result = l[str](Number(num));
    if (result !== undefined && typeof result !== "boolean") console.log(result);
    else if (typeof result === "boolean") console.log(result ? 1 : 0);
}

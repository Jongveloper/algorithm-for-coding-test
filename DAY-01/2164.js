/**
 * 문제를 풀어서 말하면
 * 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있으며, 
 * 1번 카드가 제일 위에, 
 * N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다.
 * 맨 위의 카드는 버리고 두번 째 카드는 밑으로 옮긴다.
 * 마지막까지 남아있는 카드를 구하라
 * 
 * 주어지는 것
 * N장의 카드
 * 
 * 구해야 하는 것
 * 마지막 까지 남아있는 카드
 */

let fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './2164.txt';

let input = fs.readFileSync(filePath);

const n = parseInt(input);

class Node{
    constructor(value){
        this.value=value;
        this.next = null;
        this.prev = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this._size = 0;
    }

    add(value){
        const newNode = new Node(value);

        if(!this.head)
            this.head = newNode;
        else{
            this.tail.next = newNode
            newNode.prev = this.tail
        }

        this.tail = newNode
        this._size++;

        return newNode;
    }

    getHead(){
        return this.head.value;
    }

    removeHead(){
        this.head = this.head.next;
        this.head.prev = null;
        this._size--;
    }
    getSize(){
        return this._size;
    }
}

const node = new LinkedList();

for(let i=1; i<=n;i++){
    node.add(i);
}
while(node.getSize() !==1){
    node.removeHead();
    node.add(node.getHead());
    node.removeHead();
}

console.log(node.getHead());

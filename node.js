import { linkedList } from "./linkedList.js"

class Node {
    constructor(data, head = null) {
        this.data = data
        this.head = head
    }
}

const node1 = new Node('node1', 'head')
console.log(node1)
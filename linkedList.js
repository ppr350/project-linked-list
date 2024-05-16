import { Node } from "./node.js"

class linkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.nextNode = newNode
            this.tail = newNode
        }
        this.size++
    }

    prepend(value) {
        const newNode = new Node(value)
        newNode.nextNode = this.head
        this.head = newNode
        this.size++
    }
    
    at(index) {
        let count = 0
        let current = this.head
        while (current) {
            if (count === index) {
                console.log(`${current.value} is at index ${count}`)
                return current
            }
            current = current.nextNode
            count++
        }
        return null
    }

    pop() {
        if (this.head === null) {
            return undefined
        }     
        let find = this.head
        let current = this.head
        while (find.nextNode) {
            current = find
            find = find.nextNode
        }
        this.tail = current
        this.tail.nextNode = null
        this.size--;

        if (this.size === 0) {
            this.head = null
            this.tail = null
        }
        return find
    }

    contains(value) {
        let current = this.head
        while (current) {
            if (current.value === value) {
                // console.log(current.value, value)
                return true
            }
            current = current.nextNode
        }
        return false
    }

    find(value) {
        let current = this.head
        let count = 0
        while (current) {
            if (current.value === value) {
                console.log(`The index of ${current.value} is ${count}`)
                return count
            }
            current = current.nextNode
            count++
        }
        

        return null
    }

    toString() {
        let current = this.head
        let string = ''
        while (current) {
            string += '( '+  current.value + ' ) ->'
            current = current.nextNode
        } string += ' null'
        
        console.log(string)
        return string
    }

    insertAt(value, index) {
        const newNode = new Node(value)

        if (index < 0 || index > this.size) {
            return
        }

        if (index === 0) {
            newNode.nextNode = this.head
            this.head = newNode
        } else {
            let current = this.head
            let prev = null
            let count = 0

            while (count++ < index) {
                prev = current
                current = current.nextNode
            }

            newNode.nextNode = current
            prev.nextNode = newNode

            if (index === this.size) {
                this.tail = newNode
            }
        }
        this.size++
    }

    removeAt(index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === this.size) {
            return this.pop()
        }
        let current = this.head
        let prev = null
        let count = 0
        while (count !== index) {
            prev = current
            current = current.nextNode
            count++
        }
        
        prev.nextNode = current.nextNode
        current.nextNode.prev = current.prev
        this.size--
        return current

    }
    
}


const lili = new linkedList()
lili.append('node1')
lili.prepend('node2')
lili.append('node3')
lili.at(2)
lili.pop()
lili.append('node3')
lili.append('node4')
lili.contains('node4')
lili.find('node3')
lili.insertAt('node5', 1)
lili.toString()
lili.removeAt(2)
console.log(lili)

// export { linkedList }
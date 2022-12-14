
// *** LINKED LISTS ***

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head === null
            this.tail === null
        }
        return temp
    }

    unshift(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (!this.head) return undefined
        let temp = this.head
        this.head = this.head.next
        this.length--
        if (this.length === 0) {
            this.tail = null
        }
        temp.next = null
        return temp
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head
        let i = 0
        while (counter < index) {
            temp = temp.next
            i++
        }
        return temp
    }

    set(index, value) {
        const newNode = new Node(value)
        const temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        const newNode = new Node(value)
        const temp = this.get(index - 1)
        newNode.next = temp.next
        temp.next = newNode
        this.length++
        return true
    }

    remove(index) {
        if (index < 0 || index > this.length) return undefined
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const before = get(index - 1)
        const temp = get(index)

        before.next = temp.next
        temp.next = null
        this.length--
        return temp
    }

    reverse() {
        const temp = this.head
        this.head = this.tail
        this.tail = temp
        const next = temp.next
        const prev = null

        for (let i = 0; i < this.length; i++) {
            next = temp.next
            temp.next = prev
            prev = temp
            temp = next
        }
        return this
    }
}


// let myLinkedList = new LinkedList(4)
// myLinkedList.push(7)
// console.log(myLinkedList)


class DLLNode extends Node {
    constructor(value) {
        super(value)
        this.previous = null
    }
}

class DoubleLinkedList {
    constructor(value) {
        const newNode = new DLLNode(value)
        this.head = newNode
        this.tail = this.head
        this.length = 1
    }

    push(value) {
        const newNode = new DLLNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.previous = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        const temp = this.tail
        if (this.length === 1) {
            this.head = null
            this.head.prev = null
        } else {
            this.tail = temp.prev
            this.tail.next = null
            temp.prev = null
        }
        this.length--
        return temp
    }

    unShift(value) {
        const newNode = new DLLNode(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }

    shift() {
        if (this.length === 0) return undefined
        let temp = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = this.head.next
            this.head.prev = null
            temp.next = null
        }
        this.length--
        return temp
    }

    get(index) {
        if (index < 0 || index > this.length) return undefined
        let temp = this.head
        if (index < this.length / 2) {
            for (let i = 0; i < index; i++) {
                temp = temp.next
            }
        } else {
            temp = this.tail
            for (let i = this.length - 1; i > index; i--) {
                temp = temp.prev
            }
        }
        return temp
    }

    set(index, value) {
        let temp = this.get(index)
        if (temp) {
            temp.value = value
            return true
        }
        return false
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) return this.push(value)
        if (index === 0) return this.unShift(value)

        const newNode = new DLLNode(value)
        const before = this.get(index - 1)
        const after = before.next
        before.next = newNode
        newNode.prev = before
        newNode.next = after
        after.prev = newNode
        this.length++
        return true
    }

    remove(index){
        if (index < 0 || index >= this.length) return false
        if (index === 0) return this.shift()
        if (index === this.length - 1) return this.pop()

        const temp = this.get(index)

        temp.prev.next = temp.next
        temp.next.prev = temp.prev
        temp.next = null
        temp.prev = null

        this.length--
        return temp
    }
}

// console.log(new DoubleLinkedList(7))


class Stack {
    constructor(value){
        const newNode = new Node(value)
        this.top = newNode
        this.length = 1
    }

    push(value) {
        const newNode = new Node(value)
        if (this.length === 0){
            this.top = newNode
        } else {
            newNode.next = this.top
            this.top = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.top) return undefined
        
        let temp = this.top
        this.top = this.top.next
        temp.next = null

        this.length--
        return temp
    }
}

// *** LINKED LISTS ***

class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor(value){
        const newNode = new Node(value)
        this.head = newNode
        this.tail = newNode
        this.length = 1
    }

    push(value){
        const newNode = new Node(value)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        }
        this.tail.next = newNode
        this.tail = newNode
        this.length += 1
    }

}

let myLinkedList = new LinkedList(4 )
myLinkedList.push(7)
console.log(myLinkedList)
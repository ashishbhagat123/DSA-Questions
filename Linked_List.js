class Node {
    constructor(ele) {
        this.element = ele;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    addNode(ele) {
        let node = new Node(ele);
        let current = this.head;
        if (this.head === null) {
            this.head = node;
            this.size++;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            this.size++;
        }
    }

    addNodeAtPoint(index, ele) {
        let current = this.head;
        let node = new Node(ele)
        let i = 1
        let prev = null
        let after = null

        if(index === 0){
            this.head = node
            node.next = current
            
        } else {
        while(current){
            prev = current
            after = current.next
            if(i === index){
                break
            }
            i++
            current = current.next
        }
        prev.next = node
        node.next = after
        }
    }

    printNode() {
        let arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.element);
            current = current.next;
        }

        return arr;
    }

    deleteNode(index){
        let current = this.head
        let prev = null
        let after = null    
        let i = 1

        if(index === 0){
            current = current.next
            this.head = current
        } else {
            while(current){
                let prev = current
                let after = current.next
                if(i === index){
                    after = after.next
                    prev.next = after
                }
                i++
                current=current.next
            }
        }
    }
}

let list = new LinkedList();

list.addNode(4);
list.addNode(5);
list.addNode(6);
list.addNodeAtPoint(0,1)
list.deleteNode(0)
let prin = list.printNode();
console.log(prin);

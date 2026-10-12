class LL {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value){
        if(this.tail === null) {
            prepend(value);
            return;
        }
           const newNode = new Node(value);
            this.tail.next = newNode;
            this.tail = newNode;

            this.length++;
    }


    insert(value , index) {
        if(index === 0) {
            prepend(value);
            return;
        }

        if(index === this.length) {
            append(value);
            return;
        }

        let temp = this.head;
        for(let i = 1; i < index; i++) {
            temp = temp.next ;
        }

        const newNode = new Node(value, temp.next );
        temp.next = newNode;
        this.length++;


    }




    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        
        if(this.tail === null) {
            this.tail = this.head;
        }

        this.length += 1;


    }

    deleteFirst() {
       let val = this.head.val;
        this.head = this.head.next;
        if(this.head === null) {
           this.tail === null;
        }
        this.length--;
        return val;
    }




       deleteLast() {
        if(this.length <= 1) {
            return deleteFirst();
        }

        let secondLast = this.get(this.length -2 );
        let val = this.tail.value;
        this.tail = secondLast;
        this.tail.next = null;
        return val;
    }

        deleteIndex(index) {
            if(index === null) {
                return deleteFirst();

            }

            if(index === this.length -1) {
                return deleteLast();
            }

            const prev = this.get(index - 1);
            let val = prev.next.value;
            prev.next = prev.next.next;


            return val;
        }


        find(index) {
        let node = this.head;
        while(node !== null) {
            if(node.value === value) {
                return node;
            }

            node = node.next;
        }
        return null;
    }
    
         get(index) {
        let node = this.head;
        for(let i = 0; i < index; i++) {
            node = node.next;
        }
        return node;
    }
 




    display() {
        let current = this.head;
        
        while(current !== null && current !== undefined) {
            console.log(current.value + " -> ");
            current = current.next;
        }

        console.log("NULL");
    }



}


//creates node with value and reference to next node
class Node {
    constructor(value , next){
        this.value = value;
        this.next = next;
    }


}

module.exports = LL;
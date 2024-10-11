//queue Using linkedList

const linkedList = require("./linkedList")



class LinkedListQueue{
    constructor(){
        this.list = new linkedList()
    }
    enqueue(value){ 
        return this.list.appendTail(value)
    }
    dequeue(){
        this.list.removefromFront()
    }
    peek(){
        return this.list.head.value
    }
    isEmpty(){
        return this.list.isEmpty()
    }
    getSize(){
        return this.list.Size()
    }
    print(){
        return this.list.print()
    }
}

const queue = new LinkedListQueue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.enqueue(50)
queue.enqueue(60)
queue.enqueue(70)
queue.enqueue(80)
queue.print()

module.exports = linkedList 


// //circular queue
// class circularQueue {
//     constructor(size) {
//         this.items = new Array(size);
//         this.back= -1;
//         this.front = -1;
//         this.currentLength = 0;
//         this.size = size;
//       }
//       isFull() {
//         return this.currentLength === this.size;
//       }
    
//       isEmpty() {
//         return this.currentLength === 0;
//       }
//       size() {
//         return this.currentLength;
//       }
    
//       enqueue(item) {
//         if (!this.isFull()) {
//           this.back = (this.back + 1) % this.size;
//           this.items[this.back] = item;
//           this.currentLength += 1;
//           if (this.front === -1) {
//             this.front = this.back;
//           }
//         }
//       }
    
//       dequeue() {
//         if (this.isEmpty()) {
//           return null;
//         }
//         const item = this.items[this.front];
//         this.items[this.front] = null;
//         this.front = (this.front + 1) % this.size;
//         this.currentLength -= 1;
//         if (this.isEmpty()) {
//           this.front = -1;
//           this.back = -1;
//         }
//         return item;
//       }
//       peek() {
//         if (!this.isEmpty()) {
//           return this.items[this.front];
//         }
//         return null;
//       }

//       print() {
//         if (this.isEmpty()) {
//           console.log("Queue is empty");
//         } else {
//           let i;
//           let str = "";
//           for (i = this.front; i !== this.back; i = (i + 1) % this.size) {
//             str += this.items[i] + " ";
//           }
//           str += this.items[i];
//           console.log(str);
//         }
//       }
//     }



// const queue = new circularQueue(8)
// console.log(queue.isEmpty());

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(50)
// queue.enqueue(60)
// queue.enqueue(70)
// queue.enqueue(80)

// queue.print();
// queue.dequeue();
// queue.print();
// queue.enqueue(90)
// queue.print();
// queue.dequeue();
// queue.print();
// queue.enqueue(100)
// queue.print();
// queue.dequeue();
// queue.dequeue();
// queue.dequeue();
// queue.print();

// console.log(queue.isFull());

//optimized queue 

// class Queue{
//     constructor(){
//         this.items = {}
//         this.front = 0
//         this.back = 0
//     }
//     enqueue(element){
//         this.items[this.back] = element
//         this.back++
//     }
//     dequeue(){
//         // const item = this.items[this.front]
//         this.items[this.front] = this.items[this.front+1]
//         delete this.items[this.front]
//         this.front++
//         return this.items
//     } 
//     isEmpty(){
//         return this.back - this.front === 0 
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     size(){
//         return this.back - this.front 
//     }
// }

// const queue = new Queue();
// queue.enqueue(20)
// queue.enqueue(10)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue);

// queue.dequeue()
// queue.dequeue()

// console.log(queue.peek());
// console.log(queue);




// // queue

// class Queue {
//     constructor (){
//         this.items = []   
//     }
//     enqueue(element){
//         return this.items.push(element)
//     }
//     dequeue (){
//         return this.items.shift()
//     }
//     isEmpty(){
//         return this.items.length === 0
//     }
//     peek(){
//         if(!this.isEmpty()){
//             return this.items[0]
//         }
//         return null
//     }
//     size()
//     {
//         return this.items.length
//     }
// }

// const queue = new Queue();
// queue.enqueue(20)
// queue.enqueue(10)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.enqueue(80)
// queue.enqueue(50)
// queue.enqueue(100)
// queue.enqueue(70)
// queue.enqueue(120)
// queue.enqueue(90)

// // queue.dequeue()
// console.log(queue.peek());

// console.log(queue);

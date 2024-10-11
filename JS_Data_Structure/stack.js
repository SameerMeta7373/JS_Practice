//stack Using linkedList
// import linkedList from "./linkedList"
const linkedList = require("./linkedList");

// const LinkedList = require("./linked-list-tail");

class LinkedListStack {
  constructor() {
    this.list = new linkedList();
  }

  push(values) {
    this.list.prependTail(values);
  }

  pop() {
    return this.list.removefromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.Size();
  }

  print() {
    return this.list.print();
  }
}

// const stack = new LinkedListStack();
// // console.log(stack.isEmpty());
// // stack.push(20);
// stack.push(10)
// stack.push(10);
// stack.push(30);

// stack.print()
// // console.log(stack.getSize());
// // stack.print();
// // console.log(stack.pop());
// // stack.print();
// // console.log(stack.peek());

// module.exports = linkedList


// //Stack

// class Stack {
// constructor(){
//     this.items = [];
// }
// push(element){
//     return this.items.push(element)
// }
// pop(){
//     this.items.pop()
// }
// peek(){
//     if(this.isEmpty()){
//         return null
//     }
//     else{
//     return this.items[this.items.length-1];
// }}
// isEmpty(){
//     return this.items.length === 0;
// }


// }

// const stack = new Stack();
// stack.push(10);
// stack.push(40);
// stack.push(30);
// stack.push(60);
// stack.push(50);
// stack.push(20);
// stack.pop();


// stack.pop();
// console.log(stack.peek());
// console.log(stack);
// console.log( stack.peek())
//doubly linkedlist

class Node{
    constructor(value){
        this.value = value
        this.prev = null
        this.next = null
    }
}

class doublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size === 0
    }
    getsize(){
        return this.size;
    }
    prepend(value){
        const node = new Node(value)
            if(this.isEmpty()){
                this.head = node
                this.tail = node
            }
            else{
                node.next = this.head
                this.head.prev = node
                this.head = node
            }
            this.size ++
        }
        append(value){
            const node = new Node(value)
            if(this.isEmpty()){
                this.head = node
                this.tail = node
            }
            else{
                this.tail.next = node
                node.prev = this.tail
                this.tail = node 
            }
            this.size ++
        }
        removeFromFront(){
            if(this.isEmpty()){
                return ("List is Empty")
            }
            else{
                this.head = this.head.next
            }
            this.size -- 
        }
        removeFromEnd(){
            if(this.isEmpty()){
                return ("List is Empty")
            }
            if(this.size === 1){
                this.head = null
                this.tail = null
            }
            else{
                this.tail = this.tail.prev
                this.tail.next = null 
            }
            this.size --
        }
        printReverse() {
            if (this.isEmpty()) {
              console.log("List is empty");
            } else {
              let curr = this.tail;
              let list = "";
              while (curr) {
                list += `${curr.value} <--> `;
                curr = curr.prev;
              }
              console.log(list);
            }
        }
        print(){
            if(this.isEmpty()){
                console.log("List is Empty");
            }
            else{
                let curr = this.head 
                let listValues = ""
            while(curr){
                listValues = listValues + curr.value + " <--> "
                curr = curr.next
            }
            console.log(listValues);
        }
    }

}

const list = new doublyLinkedList();
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)


list.print()
list.printReverse()

// module.exports = linkedList;







// //singly link list tail
// class Node {
//     constructor (value){
//         this.value = value
//         this.next = null
//     }
// }
// class linkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }
//     Size(){
//         return this.size
//     }

//     //for the tail implementation
//     //

//     prependTail(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node 
//         }
//         else{
//             node.next = this.head
//             this.head = node
//         }
//         this.size ++
//     }
//     appendTail(value){
//         const node = new Node(value)
//         if(this.isEmpty()){
//             this.head = node
//             this.tail = node
//         }
//         else{
//             this.tail.next = node
//             this.tail = node 
//         }
//         this.size ++
//     }
//     removefromFront(){
//         if(this.isEmpty()){
//             return("List is Empty")
//         }
//         else{
//             this.head = this.head.next 
//         }
//         this.Size --
          
//     }
//     removefromEnd(){
//         if(this.isEmpty()){
//             return("List is Empty")
//         }
//         if(this.Size === 1){
//             this.tail = null
//             this.head = null
//         }
//         else{
//             let curr = this.head
//             while(curr.next !== this.tail){
//                 curr = curr.next
//             }
//             curr.next = null
//             curr =  this.tail 
//         }
//         this.size --
//     }


    
    // //to add a element at the start of the linkedlist
    // //O(1)
    // prepend(value) {
    //     const node = new Node(value);
    //     if (this.isEmpty()) {
    //       this.head = node;
    //     } else {
    //       node.next = this.head;
    //       this.head = node;
    //     }
    //     this.size++;
    //   }
    // //to add a element at the end of the linklist 
    // //O(n)
    // append(value) {
    //     const node = new Node(value);
    //     if (this.isEmpty()) {
    //       this.head = node;
    //     } else {
    //       let curr = this.head;
    //       while (curr.next) {
    //         curr = curr.next;
    //       }
    //       curr.next = node;
    //     }
    //     this.size++;
    // }
    // insert(index, value){
    //     if(index<0 || index > this.size){
    //          console.log(("Invalid Index"))
    //     }
    //     else if(index === 0){
    //         this.prepend(value)
    //     }
    //     else {
    //         let curr = this.head
    //         const node = new Node(value)
    //         for(let i = 0; i<index-1;i++){
    //             curr = curr.next
    //         }
    //         node.next = curr.next 
    //         curr.next = node
    //         this.Size ++
    //     }
    // }
    // removeIndex(index){
    //     let temp 
    //     if(index < 0 || index >= this.size){
    //        return ("Invalid index")
    //     }
    //     if(index === 0){
    //         temp = this.head
    //         this.head = this.head.next 
    //     }else{
    //         let curr = this.head
    //         for(let i=0; i<index-1;i++){
    //             curr = curr.next
    //         }
    //         temp = curr.next
    //         curr.next = temp.next
    //     }
    //     this.Size --
    //     return (temp.value + " removed")
    // }
    // removeValue(value){
    //     let temp 
    //     if(this.isEmpty()){ 
    //         return ("List is Empty")
    //     }if(this.head.value == value){
    //         this.head = this.head.next
    //         this.size--
    //         return value
    //     }else{
    //         let curr = this.head
    //         while(curr.next.value !== value){
    //             curr = curr.next
    //         }
    //         if(curr.next.value === value){
    //             temp = curr.next
    //             curr.next = temp.next
    //             this.size--
    //             return value
    //         }
    //         return ("Value Not Found")
    //     }
    // }
    // search(value){
    //     if(this.isEmpty()){
    //         return("List is Empty")
    //     }
    //     let i = 0
    //     let curr = this.head
    //     while(curr){
    //         if(curr.value === value){
    //             return ("Found at Index : " + i)
    //         }
    //         curr = curr.next
    //         i++
    //     }
    //     return ("Not Found")
    // }
    // reverse(){
    //     let prev = null
    //     let curr = this.head
    //     while(curr){
    //         let temp = curr.next
    //         curr.next = prev
    //         prev = curr
    //         curr = temp 
    //     }
    //     this.head = prev
    // }
   
// }
// const list = new linkedList()


// list.appendTail(10)
// list.appendTail(20)
// list.appendTail(30)
// list.appendTail(40)
// list.appendTail(50)
// list.appendTail(60)
// list.appendTail(70)
// list.appendTail(80)
// list.appendTail(90)
// list.appendTail(100)

// list.removefromFront();
// list.removefromEnd();

// list.print()

  









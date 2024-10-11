// const s = "abcd";
// const t = "abcde";

// // let output = " "

// // function String1(s){
// //     s.match("abcde")
// //     return s
// // }

// // function string(Str1, Str2){
// //     for(let i = 0; i < Str2.length-1; i++){
// //         for(let j=0)
// //     }
// // }

// function string(Str1, Str2) {
//     // console.log("");
//   for (let i = 0; i < Str2.length; i++) {
//       for (let j = i; j < Str2.length ; j++) {
//         // console.log("STr2 =================>", Str2[j]);
//     //   console.log("J =========>", Str2[j], "STR1 ===>", Str1[i]);
//       if (Str1[i] == Str2[j]) {
//         // console.log("Str1 =============>", Str1[j], "Str2", Str2[i]);
//         // return Str2[j];
//         break;
//       } else {
//         // console.log("Str1 =============>", Str1[j], "Str2", Str2[i]);
//         return Str2[j]
//       }
//     }
//   }
//   // return Str2[j]
// }

// console.log(string(s, t));

// // console.log(String1(s)


class Node{
  constructor(value){
    this.next = null
    this.value = value
  }
}
class Linkedlist{
  constructor(){
    this.head = null
    this.tail = null
    this.size = 0
  }



  isempty(){
    return this.size === 0
  }

  getSize(){
    return this.size
  }

  append(value){
    let curr = this.head
    const node = new Node(value)
    if(this.isempty()){
      this.head = node
    }
    else{
      while(curr.next !== null){
        curr = curr.next
      }
      curr.next = node
    }
    this.size ++
    return node.value
  }
  
  remove(value){
    let temp 
    if(this.isempty()){
      return ("List is Empty")
    }
    if(value == this.head.value){
      this.head = this.head.next
      this.size --
      // return value
    }
    else{
      let curr = this.head
      while(curr.next.value !== value){
        curr = curr.next
      }
      if(curr.next.value === value){
        temp = curr.next
        curr.next = temp.next
        this.size --
        return value
      }
      return ("Not Found")
    }
  }
  reverse(){
    let temp
    while(curr.next != null){
      let curr =  this.head
      temp = curr.next 
      curr.next = 

    }    
  }

  print(){
    if(this.isempty()){
      return ("List is Empty")
    }
    else{
      let curr = this.head
      let listValues = ""
      while(curr){
        listValues = listValues + curr.value +  " --> "
        curr = curr.next
      }
      console.log(listValues);
    }
  }
}

const List = new Linkedlist()
// List.append(10)
List.append(20)
List.append(30)
List.append(40)
List.print()
List.remove(20)

List.print()


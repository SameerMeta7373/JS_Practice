// function outest(c){
//     var c = 20;
//     function outer(b){
//     let a = 10;
//     function inner (){
//         console.log(a,b,c);
//     }
//     return inner; 
// }
// return outer("Hello Sameer");
// }
// var space = outest();
// space();


function Counter(){
var count = 0;
this.incrementCounter = function(){
    count ++;
    console.log(count);                 //using this. for making the function 
} 
this.decrementCounter = function(){
    count --;
    console.log(count);
}
}
var counter1 = new Counter();           //making constructor and calling the function
counter1.incrementCounter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();
counter1.decrementCounter();


// var counter1 = Counter();
// for(let i=10;i>0;i--){
// counter1();
// }

// var counter2 = Counter();
// counter2();
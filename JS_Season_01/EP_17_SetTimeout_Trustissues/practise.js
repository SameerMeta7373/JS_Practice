console.log("Start");

setTimeout(function cb(){
    console.log("CallBack");    //its still print in the end because even if it is 0 ms it still will go to call back queue and stack after which it is executed
},0);

console.log("End");


//supposing millions of lines of code 

// let StartDate = new Date().getTime();
// let endDate = StartDate;
// while (endDate < StartDate + 10000){
//     endDate = new Date().getTime();
// }
// console.log("while Expires");
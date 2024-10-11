const users = [

    { firstName : "Akshay", lastName : "Saini", age: 26 },
    { firstName : "Donald", lastName : "Trump", age: 81 },
    { firstName : "Jeff", lastName : "Bezos", age: 18 },
    { firstName : "Elon", lastName : "Musk", age: 26 }

];


//age less than 30 using reduce 

const output = users.reduce((prev, curr)=>{
    if (curr.age < 30 ){
        prev.push(curr.firstName)
    }
    return prev

},[])

//filter((x) => x.age < 30).map((x) => x.firstName);

// age group 

// const output = users.reduce((prev, curr) => {
//     if(prev[curr.age]){
//         prev[curr.age] += 1 ;
//     } else {
//         prev[curr.age] = 1
//     }
//     return prev
// }, {})

console.log(output);

// { 26: 1 }




// Full Names using map 


// const output = users.map((x)=>
//     x.firstName + " " + x.lastName
// )

// console.log(output);








// const array = [4, 6, 2, 8, 1];




// //Reduce Function 


// //using reduce 


// const output = array.reduce(function (acc , curr){
//     if (curr > acc){
//         acc = curr;
//     }
//     return acc; 
// },0)

// console.log(output);

 
// function FindMax(arr){
//     let Max = 0;
//     for (let i = 0; i < arr.length ; i++){
//         if(array[i] > Max){
//             Max = array[i]; 
//         } 
//     }
//     return Max ;
// }

// console.log(FindMax(array));



// const output = array.reduce((prev , curr) => {
//     if(prev > curr ){
//         curr = prev;
//     }
//     return curr;

// }, 0)

// console.log(output);



//reduce max
// const output = array.reduce((prev , curr)=>{
//     prev = prev + curr;
//     return prev;
// }, 0);
// console.log(output);




// //filter 

// function isOdd(x){
//     return x % 2  ;
// }

// const output = array.filter(isOdd);

// console.log(output);

// let sum = 0;

// array.forEach((item, index)=>{
//     sum = sum + item ;
// })

// console.log(sum);

// const output = array.reduce((prev , curr)=>{
//     prev =  prev + curr
//     return prev 
// }, 0)


// function binary(x){
//     return x + ;
// }

// const output = array.map((x) => binary(x));

// console.log(output);

// console.log(array.map(binary));

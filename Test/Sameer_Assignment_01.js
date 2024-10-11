const array = [1,2,3,4,5,6,7,8,9]

// const array = [2,3,3,6,8,7,6,1,7]


// function duplicate(i){

// }
function prime(n){
    if(n < 2){
        return false
    }
    for(let i=2;i<n;i++){
        if(n%i === 0){
            return false
        }
        else{
            return true
        }
    }
}
output = prime(6)
console.log(output);










// let nameArray = ['S','A','M','E','E','R']
// let reversedArray = nameArray.reverse();

// console.log(reversedArray);




// function reverse(arr){
//     let array1 = " "
//     for(let i=arr.length-1;i>=0;i--){
//         array1+=arr[i]
//     }
//     return (arr)

// } 
// console.log(reverse(array));


// const output = reverse.reduce((prev, curr)=>{
//     for(prev = array.length; prev>=0 ; prev--){    
//         prev = curr 
//     }
//     return prev

// })
// console.log(output(reverse));





// const array2 = [8,7,6,5,4,3,2,1]

// const array3 = function(){
//     console.log(...array, ...array2);
// }

// array3();


// even = ((i)=>{
//     if(i % 2 == 0){
//         return i
//     }
// })


// // function even(i){
// //     if(i % 2 === 0)
// //     return (i) 
// // }


// result = array.filter(even)
// console.log(result);


// function prime(n){
//     for (let i=2;i<n;i++){
//     if(n%i === 0){
//         return(i + " is a prime number");
//     }
//     else{
//         return(i + " is not a prime number");
//     }
// }
// }


// result = array.map(prime)
// console.log(result);


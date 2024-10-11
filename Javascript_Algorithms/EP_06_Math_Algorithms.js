let num = 3

//Recursion Factorial 

function fact(n){
    if(n < 2){
        return n
    }
    return (fact(n-1) * n)
}
output = fact(num)
console.log(output);

//O(2^N)


// //Recursion Fibonacci series
// function fib(n){
//     if (n < 2){
//         return n 
//     }
//     return fib(n-1) + fib(n-2)
// }

// output = fib(n)
// console.log(output)

  






// function isPowerOfTwo(){
//     while(n>1){
//         if(n % 2 !== 0){
//             return false
//         }
//         n = n/2  
//     }
//     return true
// } 
// output = isPowerOfTwo(n)
// console.log(output);
// //O(logn)







// let n = 5;
//  function prime(n){
//     if(n < 2){
//         return false
//     }
//     for(let i=2;i<n;i++){
//         if(n%i === 0){
//             return false
//         }
//         else{
//             return true
//         }
//     }
// }
// output = prime(6)
// console.log(output);


// function fibonacci(){
//     const fib = [0,1]
//     for(let i=2;i<n;i++){
//         fib[i] = fib[i-1] + fib[i -2]
//     }
//     return fib
// }
// result = fibonacci(n)
// console.log(result);


// function factorial(){
//     let result = 1;
//     for(let i=1; i<=n;i++){
//         result = result * i
//     }
//     return result
// }
// output = factorial(n)
// console.log(output);
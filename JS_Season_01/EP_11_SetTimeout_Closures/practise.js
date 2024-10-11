// function x(){
//     for(let i = 1; i<=4; i++ ){     //using var will print 6 6 6 6 6 because 
//                                     //it is pointing to the same refrence every time the loop runs it only increments one time because of i++ 
//     setTimeout(function(){          //but using let will print correctly because let have block scope 
//                                     //and every time loop runs it creates a new block for i having a new copy of closure of setTimeout
//         console.log(i);
//     }, i*1000);
// }
    
//     // console.log("Namaste javascript");
//     // console.log("Namaste javascript");
//     // console.log("Namaste javascript");
//     // console.log("Namaste javascript");
// }
// x();


//using only var 


function y(){
    for(var j = 1; j<=10; j++ ){
        function Closure(x){
            setTimeout(function(){     //using var we did as we have to create a new copy of closure every time the loop runs 
                                        //so we create a new function for closure with parameter x and call it in setTimeout
                console.log(x);
            },x * 1000);
        }
        Closure(j);
    }
}

y();
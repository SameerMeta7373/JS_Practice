"use strict";  
//this in global space  -window, global 

// console.log(this);     // 


// function x (){
//     //the value depends on the strict / non strict mode 
//     //the value will be window in the non strict mode 
//     //and will be undefined in strict mode 
//     console.log(this);

// }

// //this keyword depends on how the function is called 

// x();
// window.x();


// const Student = {
//     name : "Sameer",                   // this can be said as method of an object 
//     printName : function(){
//         console.log(this.name);         //this keyword here is the Student object
//     },
// };

// Student.printName();


// const Student2 = {
//     name : "Ali"
// } 
// Student.printName.call(Student2);           //using call function to call property of another object with same function 
                                                //there are three sharing methods call, apply, bind 



//(this substitution) --->  inside an object's Method
//if the value of this keyword is undefined or null
//this will be replaced with the global object only in non-strict mode 



// this inside arrow function 
const obj = {
    a:10,
    x : () => {
        console.log(this);
    },
};
obj.x();


const obj2= {
    a:10,
    x : function () {
        const y = ()=>{
        console.log(this);
    };
    y();
},
};

obj2.x();

//this inside DOM elements => refrence to particular HTML element   

 

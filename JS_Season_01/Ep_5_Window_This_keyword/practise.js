var a =  10;   
console.log(this.a);      //is in global space
function b(){       //is in global space 
    var x = 10;     //this is not in global space because it is defined in a funcition 
}

//console.log(window.a);
// console.log(a);
console.log(this.a);
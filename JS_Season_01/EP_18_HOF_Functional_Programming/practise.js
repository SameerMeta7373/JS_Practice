const radius = [3, 1, 2, 4];


const area = function (radius){
    return Math.PI * radius * radius;      // area, Circumference, Diameter this can be said as a call back function which is passed in the logic argument in the Calculate Function  
};

const Circumference = function (radius){
    return 2 * Math.PI * radius;
};

const Diameter = function (radius){
    return 2 * radius;
}

const Calculate =  function (radius, logic){       //This is a Higher Order function  
    const output = [];
    for (let i = 0; i < radius.length; i++ ){
        output.push(logic(radius[i]));
    }
    return output;
};



console.log("Area" ,  Calculate(radius, area));
console.log("Circumference" , Calculate(radius, Circumference));
console.log("Diameter", Calculate(radius, Diameter));


console.log(radius.map(area));
 



// // My Logic {

// function CalculateArea_Circumference_Diameter(radius){
//     const output = [];
//     for (let i = 0; i<radius.length; i++){
//     const Area = Math.PI * radius[i] * radius[i];
//     const Circumference = 2 * Math.PI * radius[i] * radius[i];
//     const Diameter = 2 * radius[i];
//     output.push(Area, Circumference, Diameter);
// }
// return output;
// };

// console.log(CalculateArea_Circumference_Diameter(radius));


//    }





// function CalculateCircumference(radius){
//     const output = [];
// for (let i = 0; i<radius.length; i++){
//     output.push(2 * Math.PI * radius[i] * radius[i]);
// }
// return output;
// };
// console.log(CalculateCircumference(radius));


// function CalculateDiameter(radius){
//     const output = [];
// for (let i = 0; i<radius.length; i++){
//     output.push(2 * radius[i]);
// }
// return output;
// };
// console.log(CalculateDiameter(radius));
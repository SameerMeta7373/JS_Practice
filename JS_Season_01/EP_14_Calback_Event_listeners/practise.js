//Callback         //calling a function inside a function

// setTimeout(function(){
//     console.log("Timer");
// },5000);

// function x(y){
//     console.log("X");
//     y();
// }
// x(function y(){
//     console.log("Y");

// }
// );
function attachEventlisteners(){
    let count = 0;
    document.getElementById("click").addEventListener("click", function xyz(){
        console.log("Button Clicked", ++count);
});
}
attachEventlisteners();
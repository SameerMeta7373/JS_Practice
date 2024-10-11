function z(){
    var a = 100;
    function x(){  
        console.log(a,"outside");    // Parent lexical scope 
                     
        function y(){
            var a = 7;
            console.log(a);       //  ----> Closures -->function along with its lexixal scope 
    }
    y();
}x();
// var z = x();
// console.log(z);
}z();

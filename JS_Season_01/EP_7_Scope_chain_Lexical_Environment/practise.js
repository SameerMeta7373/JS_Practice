function z(){
    var e = 10;
    console.log(e);
    a();
    
    function a(){   // lexical environment is global
    var b = 20; 
    console.log(b);       // lexical parent 
    c(); 
     
    function c(){
    var f = 30;
    console.log(f);
    d();
    }

    function d(){
    var g = 40
    console.log(g);
    }
}
}
z();

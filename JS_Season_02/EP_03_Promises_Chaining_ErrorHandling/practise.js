const cart = ["Shoes", "Pants", "Shirt"];

// createOrder(cart)
// .then(order_Id => (proceedToPayment(order_Id)))
 
createOrder(cart)
    .then(function (Order_Id){              //success part
        console.log(Order_Id);
        return Order_Id;
    })
    .then(function(Order_Id){
        return proceedToPayment(Order_Id);
    })
    .then(function(paymentInfo){
        console.log(paymentInfo);
    })
    .catch(function(err){                   //reject part
        console.log(err.message);
    });
    
    
    
    //now we produce the order for the consumer
    function  createOrder(cart){
        
        const pr = new Promise(function(resolve, reject){
        //create Order
        //validate Cart
        //Order Id
        
        if(!validateCart(cart)){
            const err = new Error("The cart is not valid");
            reject(err);
        }
        //logic for createOrder
        const order_Id = "Order No 12345";
        if(order_Id){
            setTimeout((function (){
                resolve(order_Id);
            }),6000)
        }
    });
    return pr;
}
function proceedToPayment(Order_Id){
    return new Promise (function(resolve, reject){               //new promise for the proceed to payment 
        setTimeout((function(){
            resolve("Payment Successfull");
        }),2000)
    })
}

function validateCart(cart){
    return true;
}
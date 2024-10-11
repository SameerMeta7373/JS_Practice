const cart = ["shoes", "pants", "shirt"  ]

createOrder(cart, function (orderId){    //Earlier using call back Function 
    proceedTopayment(orderId); 
});                                      //callback drawbacks -->  inversion control and callback hell 


createOrder(cart)            //now using promises
    .then((orderId) => proceedTopayment(orderId))
    .then((PaymentInfo) => showOrderSummary(PaymentInfo))     //  --> promises chain 
    .then((billInfo) => showbilldetails(billInfo))


//promises are immutable which means nobody can change it and we can pass it anywher in the code 
 
// const GIT_HUB_API = "https://github.com/users/akshaymarch7"

// const user = fetch(GIT_HUB_API);

// console.log(user);

// user.then(function (data){           //now using then keyword  and attaching the function of data which sets the data coming form url to the promise
//     console.log(data);
// });


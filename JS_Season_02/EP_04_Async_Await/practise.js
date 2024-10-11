//async and await are use to handle promises  
//async function always return a promise
//await is a key word that can be used inside an asaync function 

// const p1 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Promises Resolved value 1");
//     }, 10000);
// });

// const p2 = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve("Promises Resolved value 2");
//     }, 5000);
// });


//calling an api to fetch data using async await  

const API_URL =  "https://api.github.com/uakshaymarch7";
 
async function handlePromise(){          //as an async function returnsd a promise so error handling canbe done through .catch
 

    const data = await fetch(API_URL);
    const jsonValue = await data.json();
    console.log(jsonValue)



//     //using try catch to handle error 
//     try{

//     const data = await fetch(API_URL);
//     const jsonValue = await data.json();
//     console.log(jsonValue)

// } catch(err) {
//         console.log(err);
//     }

    // console.log("Print Quickly");

    
    // const value = await p1;
    // console.log("Namaste JavaScript 1");
    // console.log(value); 

    // const value2 = await p2;
    // console.log("Namaste JavaScript 2");
    // console.log(value2);
     
}
handlePromise().catch((err)=>{
    console.log(err);

})




// function getData(){
//     p.then((res) => console.log(res));
//     console.log("Namaste JavaScript");
// }
// getData(); 



// const dataPromise = getData();
// dataPromise.then((res) => console.log(res));

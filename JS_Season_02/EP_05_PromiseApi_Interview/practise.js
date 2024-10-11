//promise.all Api

//use to take paralell apis to get and give the ouptut 
//just like an array of promises and giving ouptut of all apis parallely 
//promise.all will throw error immediately if any of the api in 
//the array is rejected



//promise.allsetteled

//it will wait untill the time of all promises in the array and in the 
//end will give the output of api which are resolved and error for which are rejected



//promise.race

//in this case the first promise in the array which is setteled 
//whether it is resolved or rejected 
// it will give the output of that promise
//and after that it will eventually give the result of the other promises


//promise.any

//it is just as same as promise.race 
//but it will give the result output of the first promise 
//which is resolved
//whether the first result has come but it is the error(rejected)
//it will wait for the promise which is resolved.
//if all the promises got error(rejected)
//it will return an array of aggregate errors 
//which consist of all the error of promises



//Promise.all

const p1 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P1 Fail"),3000)
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P2 Fail"),4000)
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("P3 Fail"),5000)
});

Promise.any([p1,p2,p3]).then(result => {
    console.log(result);
})
.catch((err)=>{
    console.error(err);
}); 

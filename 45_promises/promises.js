/* promise is for eventual completion of task. It is an object in js. It is a solution to callback hell.

resolve and reject are callbacks provided by js

promise-> 1)pending 2)fulfilled 3)rejected */


/*let promise=new Promise((resolve,reject)=>{
  console.log("i am a promise");  
  //resolve("successs");
  reject("failure");
});*/

//promise->object
//resolve,reject->handlers

/*function getData(dataId,getNextData){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data",dataId);
            resolve("success");
            //reject("error");
            if(getNextData){
                getNextData();
            }
        },5000);
    })
}
    */


//.then() & .catch()
const getPromise=()=>{

    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        //resolve("success");
        reject("network error");

    });
};

let promise=getPromise();
promise.then((res)=>{
    console.log("promise fullfilled",res);
}).catch((err)=>{//now handle error
    console.log("promise rejected",err);
});


//promise chaining

function asyncFunc1(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 1");
            resolve("success");

        },5000);
    });
}

function asyncFunc2(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data 2");
            resolve("success");

        },5000);
    });
}


console.log("fetching data1.....");
asyncFunc1().then((res)=>{
    console.log("fetching data2.....");
    asyncFunc2().then((res)=>{

    });
});


//promise chain

getData(1).then((res)=>{
    console.log(res);
    getData(2).then(()=>{
        console.log(res);
    });
});
/*callback hell: nested callbacks stacked below one another forming a pyramid structure (pyramid of doom)

this style of programming becomes difficult to understand and manage */

function getData(dataId){//in output write->getData(85415)

    setTimeout(()=>{
        console.log("data",dataId);
    },2000);
}

//hell

function getData(dataId,getNextData){//getNextData=parameter

    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000);
}
getData(1,()=>{//callback
    getData(2,()=>{//callback
        getData(3);
    });
})

/*getNextData(); calls (executes) the callback function that was passed as the second argument to getData(), allowing the next asynchronous task to start.*/


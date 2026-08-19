function api(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("weather data");//write api() in output
            resolve(200);
        }, 2000);
    });
}

async function getWeatherData(){
    await api();
    await api();
}

async function getAllData(){
    console.log("getting data1.....");
    await getData(1);
        console.log("getting data2.....");
    await getData(2);
        console.log("getting data3.....");
    await getData(3);
        console.log("getting data4.....");
    await getData(4);
}
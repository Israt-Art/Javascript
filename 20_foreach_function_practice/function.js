//for a given array of numbers,print the square of  each value using
//for each loop

let nums=[2,3,4,5,6];



nums.forEach((num)=>{
    console.log(num*num);
});


//another way

let calcSquare=(num)=>{
    console.log(num*num);
};

nums.forEach(calcSquare);
//map method

let nums=[67,52,39];

nums.map((val)=>{
    console.log(val);
});



//filter method
/* create a new array of elements that
give true for a condition/filter(eg:all odd num) */

let arr=[1,2,3,4,5,6,7];

let oddArr=arr.filter( (val) =>{
    return val%2 != 0;
});

console.log(oddArr);

//Reduce method

/* performs some operations & reduces the array
to a single value. It returns that single value. */

let arr1=[1,2,3,4];

const output=arr1.reduce( (res,curr) =>{
    return res+curr;

});

console.log(output);//(1+2+3+4)=10 like loop


//find largest elemet using reduce method

let arr2=[5,6,2,1,3];

const largest=arr2.reduce( (max,curr) =>{

    return max > curr ? max : curr;
});

console.log(largest);
















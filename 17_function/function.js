function myFuction(){
    console.log("welcome to functions");
    console.log("we are learning js");
}

myFuction();

//addtion

function sum(x,y){
    s=x+y;
    return s;
}

let val=sum(3,4);
console.log("sum is:" +val);


//sum using->arrow function

const arrowSum=(a,b) => {
    console.log(a+b); // write arrowaSum(10,20) on output part
};

//multiplication using->arrow function

const multi=(a1,b1)=>{
    return a1*b1;
};


// print hello using arrow function

const hello=()=>{
    console.log("hello world");
}
//a callback is a function passed as an argument to another function


function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(5, 3, sum);

//sumCallback is not a built-in function. It's just a parameter name that the programmer chose

//another way

function sum(a,b){
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}

calculator(8,17,(a,b)=>{
    console.log(a+b);
});
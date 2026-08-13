let a=5;
let b=10;

console.log("a=",a);
console.log("b=",b);
console.log("a+b=",a+b);

//now handle this error

try{
    console.log("a+b=",a+c);//error

}
catch(err){
    console.log(err);
}

//this two line will execute without any problem
console.log("a+b=",a+b);
console.log("a+b=",a+b);

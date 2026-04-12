console.log("hello world");

//arithmatic

/*let a=5;
let b=2;
console.log("a+b =",a+b);
console.log("a-b =",a-b);
console.log("a*b =",a*b);
console.log("a/b =",a/b);
console.log("a%b =",a%b);
console.log("a**b =",a**b);*/


//unary operator

/*let a=5;
let b=2;
console.log("++a =", ++a);
console.log("a=",a);
console.log("a++",a++);
console.log("a=",a);*/


//assingment operator

/*let a=5;
let b=2;

a+=4;
console.log("a=",a);
a*=4;
console.log("a=",a);
a/=4;
console.log("a=",a);
a%=4;
console.log("a=",a);*/


//comparision operator

/*let a=5;
let b=2;

console.log("a==b",a==b);
console.log("a!=b",a!=b);
console.log("a===b",a===b);//equal to & type
console.log("a!==b",a!==b);
console.log("a<b",a<b);
console.log("a<=b",a<=b);

*/

//logical operator

let a=6;
let b=5;
let cond1=a>b;//true
let cond2=a===5;//ture
console.log("cond1 && cond2",cond1 && cond2);



let c=6;
let d=5;
console.log("cond1 || cond2=",c<d || c===6);



let e=6;
let f=5;
console.log("!(e<f) =",!(e<f));//true



//conditional statement

let age=25;
if(age>=18){
    console.log("you can vote");
}


let mode="light";
let color;

if(mode=="dark"){
    color="black";
}
if(mode=="light"){
    color="white";
}
console.log(color);



let num=10;
if(num%2==0){
    console.log("even");
}
else{
    console.log("odd");
}



//systax->rules

let mode1="dark";
let color1;

if(mode1==="dark"){
    color1 = "black";
}
else if(mode1==="blue"){
    color1="blue";
}
else if(mode1==="pink"){
    color1="pink";
}
else{
    color="white";
}
console.log(color1);


//ternary operator

let age1=25;
let result=age1>=18 ? "adult":"not adult";
console.log(result);










/* filter out of the marks of students that scored 90+ */



let marks =[80,90,85,95,70,85];

let highMarsks =marks.filter(function(mark){
    return mark >=90;
});
console.log(highMarsks);



/*
->take a num n as input from user. Ctreate an array of numbers from 1 to n.
->use the reduce method to calculate sum of all numbers in the array
->use the reduce method to calculate product of al numbers */

let n=prompt("enter a number");

let arr=[];

for(let i=1;i<=n;i++){
    arr[i-1]=i;
}

console.log(arr);

//sum

let sum=arr.reduce((sum,num)=>{
    return sum+num;
});

console.log(sum);

//product

let product=arr.reduce((product,num)=>{
    return product*num;
});

console.log(product);
for(let count=1;count<=5;count++){
    console.log("APNA COLLEGE");
}


let sum=0;
for(let i=1;i<=5;i++){
    sum=sum+i;
}
console.log("sum=",sum);


//while
let i=1;
while(i<=5){
    console.log("i=",i);
    i++;
}


//do while
let i1=20;
do{
console.log("APNA");
i++;
}while(i<=10);



//for-of loop
let str="ApnaCollege";
let size=0;
for(let i of str){
    console.log(i);
    size++;
}

console.log("string size:",size);

//for in loop
let student={
    name:"RAHUL",
    age:20,
    cgpa:7.5,
    isPass:true,
};
for(let key in student){
    console.log("key=",key," value=",student[key]);
}
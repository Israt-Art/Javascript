let arr=[1,2,3,4,5];

arr.forEach(function printVal(val){//value at each index
      console.log(val);
});

//arrow function formate

let arr2=["israt","jahan","sukonna"];

arr2.forEach((val,idx,arr)=>{
      console.log(val.toUpperCase(),idx,arr);
});
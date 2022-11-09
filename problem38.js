let arr=[3,4,5,3,23,2,5,7,6,4,3];
let sum=0;
let Find= arr.filter((elements,index)=>{
    sum=sum+elements;
  return sum;
})
console.log(sum);
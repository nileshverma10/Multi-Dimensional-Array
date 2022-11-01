let arr=[11,32,3,45,56,78,89,900,0,98,87];
let sum=0;
let count=0;
let FindAvg= arr.filter((elements,index)=>{
  if(index%2==0){
    sum=sum+elements;
    count++;
  }
  return sum,count;
})
console.log(sum/count);
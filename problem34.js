let arr=[3,4,5,3,23,2,5,7,6,4,3];
let sum=0;
let FindAvg= arr.filter((elements,index)=>{
  if(index%2!=0){
    sum=sum+elements;
  }
  return sum;
})
console.log(sum);
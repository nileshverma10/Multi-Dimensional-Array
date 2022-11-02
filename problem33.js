let arr=[1,2,3,4,5,4,3,2];
let sum=0;
let FindAvg= arr.filter((elements,index)=>{
  if(index%2==0){
    sum=sum+elements;
  }
  return sum;
})
console.log(sum);
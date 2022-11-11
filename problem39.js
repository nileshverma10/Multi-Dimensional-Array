let arr=[3,4,5,3,23,2,5,7,6,4,3];
let mul=1;
let Find= arr.filter((elements,index)=>{
    mul=mul*elements;
  return mul;
})
console.log(mul);
let arr=[3,4,,3,4,5,6];
let mul=1;
let Find= arr.filter((elements,index)=>{
    mul=mul*elements;
  return mul;
})
console.log(mul);

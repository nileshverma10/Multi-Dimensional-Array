function arraySumAndProductEquationIII(N,arr){
    // Write your code here! 
    let x=0;
     let y=1;
      for(i=0; i<=arr.length-1; i++){
          x=x+arr[i];
          y=y*arr[i];
      }
      let z=7*x+9*y;
      console.log(z);
       
    }
    
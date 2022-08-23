function specificDiagonals(R, C, matrix, K){
    //write code here
  let diff,sum;
  for(i=0; i<=R-1; i++){
      for(j=0; j<=C-1; j++){
          if(matrix[i][j]==K){
              diff=i-j;
              sum=i+j;
          }
      }
  }
   let d1="";
   let d2="";
      for(i=0; i<=R-1; i++){
          for(j=0; j<=C-1; j++){
             if(diff==i-j){
                 d1=d1+matrix[i][j]+" ";
             } 
             if(sum==i+j){
                 d2=d2+matrix[i][j]+" ";
             }
          }
      }
      
     console.log(d1);
     console.log(d2);
}



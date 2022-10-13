function binaryMatrix(N,M, matrix) {
    //write code here
      for(i=0; i<=N-1;i++){
          for(j=0; j<=M-1; j++){
          if(matrix[i][j]==1){
              matrix[i][j]=0;
          }else{
               matrix[i][j]=1;
          }
          }
      }
     for(i=0; i<N; i++){
         let bag="";
         for(j=0; j<M; j++){
             bag+=matrix[i][j]+" ";
         }
         console.log(bag);
     }
  }
  
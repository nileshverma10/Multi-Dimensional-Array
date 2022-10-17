function goInZigZag(N, M, matrix){
    //write code here
    let bag= "";
     for(i=0; i<=N-1; i++){
         
         if(i%2==0){
             for(j=M-1; j>=0; j--){
                 bag=bag+matrix[i][j]+" ";
             }
         }else{
             for(j=0; j<=M-1; j++){
                bag=bag+matrix[i][j]+" ";
             }
         }
        
     }
      console.log(bag);
}

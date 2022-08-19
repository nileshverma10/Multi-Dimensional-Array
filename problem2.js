function sumOfRows(N,M,arr){
    //write code here 
     
    for(i=0; i<=N-1; i++){
        let bag="";
         let sum=0;
        for(j=0; j<=M-1; j++){
            bag=bag+arr[i][j];
            sum= sum+arr[i][j];
        }
      console.log(sum);
    }
      
}

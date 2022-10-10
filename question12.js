function sumOfProducts(N,arr){
    //Write code here
     let sum=0;
      for(i=0; i<N; i++){
             sum+=(arr[i]*(i+1));
      }
      console.log(sum);
    }
    
    
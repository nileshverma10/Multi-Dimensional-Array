function substringsEndingWithK(N,A,K){
    //code here
     let bag="";
    for(i=0; i<=A.length-1; i++){
        for(j=i; j<=A.length-1; j++){
            bag+=A[j];
        }
    }
    let count=0;
   for(x=0; x<=bag.length-1; x++){
       if(bag[x]==K){
           count++;
       }
   }
   console.log(count);
}

function smallerThanLargest(N, A){
    // write code here
    let max= -Infinity;
    for(i=0; i<N; i++){
        if(A[i]>max){
            max=A[i];
        }
    }
      let bag="";
    for(i=0; i<=A.length-1; i++){
        if(A[i]==max){
            bag=bag+A[i]+" ";
        }else{
            A[i]=-1;
            bag=bag+A[i]+" ";
        }
    }
       console.log(bag);
}

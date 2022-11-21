function applyBasicMaths(N,A){
    //write code here
    let sum=0;
    for(i=0; i<N; i++){
        sum+=A[i];
    }
    min= Infinity;
    let index=-1;
    for(i=0; i<=N; i++){
        rem= sum-A[i];
        if(rem%7==0&& A[i]<min){
            min=A[i];
            index=i;
        }
    }
    console.log(index);
    
}

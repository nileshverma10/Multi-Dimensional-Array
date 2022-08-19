function oddSumColumns(N,M,arr){
    //write code here
    for(i=0; i<=M-1; i++){
        let sum=0;
        for(j=0; j<=N-1; j++){
            if(arr[j][i]%2!=0){
                sum=sum+arr[j][i];
            }
        }
        console.log(sum);
    }
}

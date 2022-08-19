function evenSumRows(N,M,arr){
    //write code here
    for(i=0; i<=N-1; i++){
        let bag="";
        let sum=0;
        for(j=0; j<=M-1; j++){
            if(arr[i][j]%2==0){
                bag=bag+arr[i][j];
                sum=sum+arr[i][j];
            }
        }
        console.log(sum);
    }
}

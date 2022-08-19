function array2D(N,M,arr){
    //write code here
    for(i=0;i<=N-1; i++){
        let bag="";
        for(j=0; j<=M-1; j++){
            bag=bag+arr[i][j]+" ";
            
        }
        console.log(bag);
    }
}

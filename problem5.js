function vowelsInRows(N,M,arr){
    //write code here
    for(i=0; i<=N-1; i++){
        let present=0;
        for(j=0; j<=M-1; j++){
            if(arr[i][j]=="a"||arr[i][j]=="e"|| arr[i][j]=="i"||arr[i][j]=="o"|| arr[i][j]=="u"){
                present=1;
            }
        }
        if(present==1){
            console.log("Yes");
        }else{
            console.log("No")
        }
    }
    
}

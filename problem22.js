function patternIndex(N){
    //write code here
    for(i=0; i<N; i++){
        let bag="";
        for(j=0; j<N; j++){
            if(j%2==0){
                bag=bag+i+" ";
            }else{
                bag=bag+j+" ";
            }
        }
        console.log(bag);
    }
}


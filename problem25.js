function traverse2dArray(N, M, matrix){
    //write code here
    let bag="";
    for(i=M-1; i>=0; i--){
        for(j=0; j<N; j++){
            bag+= matrix[j][i]+" ";
          
        }
    }
      console.log(bag);
}

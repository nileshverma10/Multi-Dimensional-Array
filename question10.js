function traverse2dArray(N, M, matrix){
    //write code here
    let bag="";
    for(i=M-1; i>=0; i--){
   for(j=N-1;j>=0; j--){
       bag=bag+matrix[j][i]+" ";
   }
  }
    console.log(bag);
}

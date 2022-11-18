function patternOfN(N) {
    // Write code here
  let count=1;
    for(i=1; i<=N; i++){
       let bag="";
        for(j=1; j<=N; j++){
            bag+=count+" ";
            count++;
        }
        console.log(bag);
    }
}
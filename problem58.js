function subStrUnderCond(s){
    //write code here
    let N=s.length;
    let count=0;
    for(i=0; i<=N; i++){
        let sub="";
        for(j=i; j<=N; j++){
            sub=sub+s[j];
            if(sub[0]== sub[sub.length-1]){
                count++;
            }
           
        }
    }
     console.log(count);
}

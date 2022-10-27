function nestedReversePattern(num) {
    // Write code here
    
    for(i=num; i>=1; i--){
        let bag="";
        for(j=num; j>=1; j--){
           bag+= j+" ";
              
        }
     console.log(bag);
    }
  
}

function masaiSentenceReverse(s) {
    //write code here
    let bag="";
    let bag2= s.split(" ");
     for(i=bag2.length-1; i>=0; i--){
         bag=bag+bag2[i]+" ";
        
     }
      console.log(bag);
  }
  
  
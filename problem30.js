function binaryString(N,str){
    //write code here
      let longest=0;
   for (i=0; i<=str.length-1; i++){
      let bag="";
      for(j=i; j<=str.length-1; j++){
          bag+=str[j];
    if(bag==0 && bag.length>longest){
        longest=bag.length;
    } 
    }
   }
    console.log(longest);
}



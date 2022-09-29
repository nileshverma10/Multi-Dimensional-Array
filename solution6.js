function dhoniFan(N, arr){
    //write code here
   let count=0;
   for(i=0; i<=arr.length-1; i++){
        let newarr=[];
      for(j=i; j<=arr.length-1; j++){
          newarr.push(arr[j]);
         for(k=0;k<newarr.length; k++){
             if(newarr[k]==7){
                 count++;
                 break;
             }
         }
      }
      
   }
   console.log(count);
   
}

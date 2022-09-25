function arrayToStr(N,arr) {
    //write code here
      let bag="";
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]<0){
                bag=bag+0;
           }else{
                bag=bag+arr[i];
            }
            
        }
        console.log(bag);
    
    
}

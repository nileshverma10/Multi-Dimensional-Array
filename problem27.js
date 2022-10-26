function removeUppercase(N, str) {
  //write code here
  let bag="";
  let lower="qwertyuiopasdfghjklzxcvbnm";
  let upper="QWERTYUIOPASDFGHJKLZXCVBNM";
  for(i=0; i<=str.length-1; i++){
      for(j=0; j<=lower.length-1; j++){
          if(str[i]==lower[j]){
             bag=bag+lower[j];
          }else {
              
          }
      }
  }
  console.log(bag);
 }
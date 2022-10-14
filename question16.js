function mapSymbolsSum(N, str) {
    //write code here
      let obj={'!' : 1,'@' : 2,'#' : 3,'$' : 4,'%' : 5,'^' :6,'&' : 7,'*' : 8};
      let sum=0;
      for(i=0;i<=str.length-1; i++){
          for(let x in obj){
              if(str[i]==x){
                  sum+=obj[x];
              }
          }
      }
      console.log(sum);
   }
  
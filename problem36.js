let arr= [1,1,1,2,3,4,5,5,5];
let count=0;
let min=Infinity;
 for(i=0; i<=arr.length-1; i++){
     if(arr[i]<min){
         min=arr[i];
     }
 }
 for(j=0; j<=arr.length-1; j++){
        if(min==arr[j]){
              count++;
        };
 }
 console.log(count*min);
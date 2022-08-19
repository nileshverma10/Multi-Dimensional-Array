//Given a square matrix print both the diagonals

let arr=[
  [4,5,6],
  [6,7,8],
  [3,4,5]
];

let row=arr.length;
let column= arr[0].length;
  let bag1="";
  let bag2= "";
for(i=0; i<=row-1; i++){
 for(j=0; j<=column-1; j++){
    if(i==j){
      bag1=bag1+arr[i][j]+" "; 
    }   
    if(i+j==row-1){
      bag2= bag2+arr[i][j]+" ";
    }
  }
}
 console.log(bag1);
 console.log(bag2);
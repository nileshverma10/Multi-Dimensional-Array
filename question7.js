//Given a matrix print it in the form of a snake

let arr=[
  [2,3,4,5,6],
  [2,4,6,8,9],
  [9,7,4,3,2]
];
let row=arr.length;
let column= arr[0].length;
for(i=0; i<=row-1; i++){
  if(i%2==0){
    for(j=0; j<=column-1; j++){
      console.log(arr[i][j]);
    }
  }  else{
    for(j=column-1; j>=0; j--){
      console.log(arr[i][j]);
    }
  }
}
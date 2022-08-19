

let arr=[
  [1,2,3],
  [4,5,6],
 [7,8,9]
];

let row= arr.length;
let column= arr[0].length;
for(i=0; i<=column-1; i++){
  for(j=0;j<=row-1; j++){
    console.log(arr[j][i]);
  }
}
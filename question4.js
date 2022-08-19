let arr=[
  [1,2,3],
  [4,5,6],
 [7,8,9]
];

let row= arr.length;
let column= arr[0].length;
for(i=column-1; i>=0; i--){
  for(j=row-1;j>=0; j--){
    console.log(arr[i][j]);
  }
}
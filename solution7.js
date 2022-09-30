function solve(N,K,arr){
    //write code here
    let sum=0;
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]<=K){
            sum=sum+arr[i];
        }
    }
    console.log(sum);
}

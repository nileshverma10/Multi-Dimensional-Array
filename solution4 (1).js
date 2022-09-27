function divisibleByM(N,M,arr) {
    //write code here
    let bag="";
    for(i=0; i<=arr.length-1; i++){
        if(arr[i]%M==0){
            bag=bag+-1+" ";
        }else{
            bag=bag+arr[i]+" ";
        }
    }
    console.log(bag);
}

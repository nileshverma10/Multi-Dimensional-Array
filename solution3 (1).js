function goodBadStr(str) {
    //write code here
    let bag= str[0];
    for(i=0; i<=str.length-1; i++){
        if(bag[bag.length-1]!= str[i]){
            bag= bag+str[i];
        }
    }
    console.log(bag);
}

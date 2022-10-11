function capitalLetterInString(N, str){
	//Write your code here
	let count=0;
	let upperCase="ABCDEFGHIJLKMNOPQRSTUVWXYZ";
	for(i=0;i<N; i++){
	    for(j=0; j<26; j++){
	        if(str[i]==upperCase[j]){
	            count++;
	        }
	    }
	}
	console.log(count*5);
}

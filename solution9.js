function twoStringsFromOne(N, str) {
    //write code here
    let vowel="";
    let consonant="";
    for(i=0; i<N; i++){
        if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
           vowel=vowel+str[i];
        }else{
            consonant=consonant+str[i];
        }
    }
    console.log(vowel);
    console.log(consonant);
  }
  

// Complete the following function and use this in solving sumOfPrimeFromAToB function
function checkPrime(n){
	// This function take single input i.e n and check whether that number is prime or not
    // if number is prime then return true otherwise false 
     if(n<=1){
         return false;
     }
     for( let i=2; i<n; i++){
         if(n%i==0){
             return false;
         }
     }
    return true;
}


 function sumOfPrimeFromAToB(A,B)
  {
   //Code Here
   let sum=0;
   for(let i=A; i<=B; i++){
       if(checkPrime(i)){
           sum+=i;
       }
   }
   console.log(sum);
  }

let username = document.getElementById("username");
let password = document.getElementById("password");
let flag= 1;
  
function validateForm(){
    if(username.value==""){
        document.getElementById("usererror").innerHTML="Enter the username";
        // alert("Enter the username");
    //   flag=0;
    }else if(username.value.length<2){
        document.getElementById("usererror").innerHTML="Enter the correct username";
        // console.log("Enter the proper Name");
     // flag=0;  
         
    } else{
        document.getElementById("usererror").innerHTML="";
    }
    if(password.value==""){
        document.getElementById("passerror").innerHTML="Enter the  password";
        // console.log("Enter the password");
        //flag=0;
      
    }else if(password.value.length<6){
        document.getElementById("passerror").innerHTML="Enter the correct password";
        // console.log("Enter the proper password");
        //flag=0;

    }else{
        document.getElementById("passerror").innerHTML="";
    }
    return false;
    // if(flag){
    //     
    // }else{
    //     
    // }
    
}
function myfunction(){
    if(username.value==""|| username.value.length<2||password.value==""||password.value.length<6){
        alert("Please Fill the Input");
    }else{
        alert("Login SucessFull");
    }
}
 
     

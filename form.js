let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let phone= document.getElementById("phone");
let username= document.getElementById("username");
let email= document.getElementById("email");
let dob = document.getElementById("dob");
let zipcode = document.getElementById("zipcode");
let submit= document.getElementById(onclick,"submit");

function validateForm(){
    if(fname.value ==""){
        document.getElementById("ferror").innerHTML="Enter the First Name";
        
    }
     if(lname.value==""){
        document.getElementById("lerror").innerHTML="Enter the Last Name";
    }
    if(phone.value==""){
        document.getElementById("perror").innerHTML="Enter the Phone Number";
    }else if(phone.value.length<10){
        document.getElementById("perror").innerHTML="Enter the correct  Number";
    }
    if(username.value==""){
        document.getElementById("usererror").innerHTML="Enter the username";
    }
    if(email.value==""){
        document.getElementById("eerror").innerHTML="Enter the email";
    }
    if(dob.value==""){
        document.getElementById("derror").innerHTML="Enter the DOB";
    }
    if(zipcode.value==""){
        document.getElementById("zerror").innerHTML="Enter the ZipCode";
    }else if(zipcode.value.length<6){
        document.getElementById("zerror").innerHTML="Enter the Valid ZipCode";
    }
    //  if(submit.value){
    //     alert("succesfull");
    //  }
    return false;
    
    
}
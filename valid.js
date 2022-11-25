let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let flname = document.getElementById("flname");
let phone = document.getElementById("phone");
let email = document.getElementById("email");
let dob = document.getElementById("dob");
let zipcode = document.getElementById("zipcode");
let password = document.getElementById("password");
let cpassword = document.getElementById("cpassword");


function validateForm() {
    if (fname.value == "") {
        document.getElementById("ferror").innerHTML = "Enter the First Name";
    } else if (fname.value.length < 2) {
        document.getElementById("ferror").innerHTML = "Enter the Correct Name";
    }

    if (lname.value == "") {
        document.getElementById("lerror").innerHTML = "Enter the Last Name";
    }
    if (phone.value == "") {
        document.getElementById("perror").innerHTML = "Enter your Number";
    } else if (phone.value.length < 10) {
        document.getElementById("perror").innerHTML = "Enter the Correct Number";
    }
    if (flname.value == "") {
        document.getElementById("flerror").innerHTML = "Enter your Full Name";
    }
    if (email.value == "") {
        document.getElementById("eerror").innerHTML = "Enter your Email";
    }
    if (dob.value == "") {
        document.getElementById("derror").innerHTML = "Enter your DOB";
    }
    if (zipcode.value == "") {
        document.getElementById("zerror").innerHTML = "Enter the ZipCode";
    } else if (zipcode.value.length < 6) {
        document.getElementById("zerror").innerHTML = "Enter the Correct ZipCode";
    }
    if (password.value == "") {
        document.getElementById("passerror").innerHTML = "Enter your password";
    } else if (password.value.length < 6) {
        document.getElementById("passerror").innerHTML = "Password must be at least 6 characters long.";
    }
    if (cpassword.value == "") {
        document.getElementById("cpasserror").innerHTML = "Confirm your password";
    }
    
    // if(password.value!=cpassword.value){
    //     alert(" Your password does not match");
    // }
    return false;
}
function myfunction() {
    if (fname.value == "" || lname.value == "" || phone.value == "" | flname.value == "" || email.value == "" || dob.value == "" || zipcode.value == "" || password.value == "") {
        alert("Please Fill the Input");
    } else if (password.value != cpassword.value) {
        alert(" Your password does not match");
    }
    else {
        alert("Login Sucessfull");
        return false;
    }
}

// var e = document.getElementById("drop");
// var value = e.value;
// var text = e.options[e.selectedIndex].text;

function getValue(id,value){
    // var fname = document.getElementById('fname').value
    console.log(id+" "+value);
   
    // console.log(id + value);
    // var lname = document.getElementById('lname').value
    // console.log("lname", lname);
    // var gender = document.getElementById('gender').value
    // console.log("gender", gender);
//   }
// function getValue(){
//     var fname = document.getElementById('fname').value
//     console.log("fname ",fname);
 }
// function getlValue(){
//     var lname = document.getElementById('lname').value
//     console.log("lname ",lname);
// }
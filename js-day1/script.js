// var username ="GMIT"
// var password="gmit123"

// function fnValidate() {
//     let inputUsername=document.getElementById("username").value;
//     let inputpassword=document.getElementById("password").value;
//     console.log(inputUsername,inputpassword);
// }

// if(true){
//     console.log("success");
// }
// else {
//     console.log("failure");
// }

// function  fnValidateSignUpForm() {
//     let fname=document.getElementById("fname").value;
//     let lname=document.getElementById("lname").value;
//     let email=document.getElementById("email").value;
//     let password=document.getElementById("password").value;
//     let cpassword=document.getElementById("cpassword").value;
//     // console.log(fname,lname,email,password,cpassword);

//     let validateFname=validateFields(fname);
// }

// function validateFields(inputValue) {
//     if(fname.lentgh>0){
//         console.log("Valid")
//     }
//     else{
//         console.log("Invalid");
//     }
// }


// function fnValidateSignUpForm() {
//     let fname = document.getElementById("fname");
//     let lname = document.getElementById("lname");

//     validateField(fname, "First name must have at least 5 characters.");
//     validateField(lname, "Last name must have at least 5 characters.");
// }

// function validateField(inputField, errorMessage) {
//     if (inputField.value.length < 5) {
//         const errorMsg = document.createElement("p");
//         errorMsg.className = "error-message";
//         errorMsg.style.color = "red";
//         errorMsg.style.marginTop = "5px";
//         errorMsg.textContent = errorMessage;
//         inputField.insertAdjacentElement("afterend", errorMsg); 
//     }
// }


function fnValidateSignupForm(){
    let firstname=document.getElementById("fname").value;
    let lastname=document.getElementById("lname").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let confirmPassword=document.getElementById("password").value;

    if (firstname.length < 5) {
        console.log("Failure");
        console.log("Firstname should have atleat 5 characters");
    } else {
        console.log("Firstname is valid");
        console.log("Success");
    }
    if(lastname.length<5){
        console.log("Lastname is less than 5 characters");
    }
    else {
        console.log("Lastname is valid");
    }
    if (password.length<8){
        console.log("Password must contain atleast 8 characters");
    }
}
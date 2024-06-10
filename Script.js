// SignUp

const form = document.getElementById("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
// const phoneNumber = document.getElementById("PhoneNumber");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");


form. addEventListener ("submit", (e) => {
    e.preventDefault();
    checkInputs()
}) 

function checkInputs() {
    const fullnamevalue = fullname.value;
    const emailvalue = email.value;
    // const phoneNumberValue = phoneNumber.value;
    const passwordvalue = password.value;
    const confirmPasswordValue = confirmPassword.value;

    if(fullnamevalue === ""){
        setError(fullname,"This field cannot be blank");

    }
    else{
        setSuccess (fullname);

    }

    if(emailvalue === ""){
        setError(email,"This field cannot be blank");
    }
    else if (!isemail(emailvalue)){
        setError(email,"Invalid email input");
    }
    else {
        setSuccess (email);
    }

    // if (phoneNumberValue === ""){
    //     setError (phoneNumber, "This field cannot be blank");
    // }
    // else if (phoneNumberValue === String){
    //     setError (phoneNumber, `Input should be Number`);
    // } 
    // else{
    //     setSuccess (phoneNumber);
    // }

    if (passwordvalue === ""){
        setError (password,"Password cannot be empty");
    } else if (passwordvalue.lenght<=6){
        setSuccess (password,"Input not up to six (6)character");
    }
    else{
        setSuccess (password);}
    
    if (confirmPasswordValue === ""){
            setError (confirmPassword,"Password cannot be empty");}

    if (confirmPasswordValue !== password){
        setError ( confirmPassword,"Password and Confirm password does not match");
    }

    else{
        setSuccess (confirmPassword);
    }

}

function setError(input, msg) {
    const inputControl = input.parentElement;
    const small=inputControl.querySelector("small");
	small.innerText=msg;
    small.style.visibility = "visible"
	// add error class
	inputControl.className="inputControl error";

}

function setSuccess(input){
	const inputControl=input.parentElement;
    const small=inputControl.querySelector("small");
	small.innerText='';
	inputControl.className="inputControl success";

}

function isemail(email){
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

}



// let x = "Ade ola"

// console.log (x)

// function signUp() {
//     let userName = document.getElementById("fullname").value;
    
//     let userdata = {
//         userName: userName
//     }
// }


// function signUp() {
// const form = document.getElementById("form").value;
// let userName = document.getElementById("fullname").value;
// let email = document.getElementById("signupEmail").value;
// let password = document.getElementById("signupPassword");
// let confirmPassword = document.getElementById("SignupPasswordCon");

// let userSignUp = {
//     userName: userName,
//     email: email,
//     password: password,
//     confirmPassword: confirmPassword
// }
// console.log (userSignUp)

// form.addEventListener('submit', e =>{
//     e.preventDefault();

//     signUp()})
// })

// let errorMes = (element, message) =>{
//     let inputControl = element.parentElement
//     let errorDisplay = inputControl.querySelector ('.error');

//     errorDisplay.innerText = message
//     inputControl.classList.add('error')
//     inputControl.classList.remove('Success')
// }

// let SuccessMes = element =>{
//     let inputControl = element.parentElement
//     let errorDisplay = inputControl.querySelector('.error');

//     errorDisplay.innerText = "";
//     inputControl.classList.add('success')
//     inputControl.classList.remove('error')
// }

// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };


// const validateInputs = () => {
//  const userNameValue = userName.value.trim();
//  const emailValue = email.value.trim();
//  const passwordValue = password;
//  const confirmPasswordValue = confirmPassword.value.trim();

//     if (userNameValue === ""){
//         setError(userName, "Full name can not be empty");
//     } else {
//         setSuccess (userName);
//     }

// }
// }
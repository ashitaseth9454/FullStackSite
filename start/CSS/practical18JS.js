

const form1=document.getElementById('form');
const username=document.getElementById('user');
const email=document.getElementById('email');
const password11=document.getElementById('password1');
const password22=document.getElementById('password2');
const small=document.querySelector('s');

form1.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});

function checkInput(){
    const usernamevalue=username.value.trim();
    
    if(usernamevalue===''){
        showError(username,"UserNAME can not be blank");
    }
    else if(!isUservalid(usernamevalue)){
        showError(username,"Please Enter a Valid username ")
    }
    else{
        showSuccess(username);
    }

    const emailvalue=email.value.trim();
    
    if(emailvalue===''){
        showError(email,"Email id can not be blank");
    }
    else if(!isEmailValid(emailvalue)){
        showError(email,"Please Enter a Valid email ")
    }
    else{
        showSuccess(email);
    }

    const password11value=password11.value.trim();
    
    if(password11value===''){
        showError(password11,"Password can not be blank");
    }
    else{
        showSuccess(password11);
    }

    const password22value=password22.value.trim();
    if(password11value!=''){
    if(password22value!=password11value){
        showError(password22,"Password doesn't match above password");
    }
    else{
        showSuccess(password22);
    }
}
    else{
        blankError(password22,"Password can't be blank");
    }
}

function showError(input,message){
    const formControl=input.parentNode;
    formControl.className='form-control1 error';
    const small=formControl.querySelector('small');
    small.innerHTML=message;
}

function showSuccess(input,message){
    const formControl=input.parentNode;
    formControl.className='form-control1 success';

}

function blankError(input,message){
    const formControl=input.parentNode;
    formControl.className='form-control1 error';
    const small=formControl.querySelector('small');
    small.innerHTML=message;
}

function isEmailValid(email){
    return /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,3})$/.test(email)
}

function isUservalid(username){
    return /^([a-z0-9_\.\-\ ]+)$/.test(username)
}


/*var form = document.getElementById("form");
var username = document.getElementById("username")
var email = document.getElementById("email")
var password =  document.getElementById("password1")
var confirmPassword = document.getElementById("password2");


form.addEventListener("submit",function(e){
e.preventDefault();
checkValid();


})

function checkValid(){

    var userRight= document.getElementById("userRight");
    var userWrong= document.getElementById("userWrong");
    var userError= document.getElementById("userError");
    var emailRight= document.getElementById("emailRight");
    var emailWrong= document.getElementById("emailWrong");
    var emailError= document.getElementById("emailError");
    var pass1Right= document.getElementById("pass1Right");
    var pass1Wrong= document.getElementById("pass1Wrong");
    var pass1Error= document.getElementById("pass1Error");
    var pass2Right= document.getElementById("pass2Right");
    var pass2Wrong= document.getElementById("pass2Wrong");
    var pass2Error= document.getElementById("pass2Error");


    if(username.nodeValue.trim()===""){
        username.style.border = "1px solid red";
        userError.innerHTML="* cannot be Empty";
        userError.style.visibility="visible";
        userWrong.style.visibility="visible";
    }
    else{
        if(username.nodeValue.trim().match(/^[a-z0-9]+$/g)){

            userError.style.visibility="hidden";
            userWrong.style.visibility="hidden";
            userRight.style.visibility="visible"
            username.style.border="1px green solid";

        }
        else{
            username.style.border="1px red solid";
            userError.innerHTML="* username should only contain lowercase with no special symbols"
            userError.style.visibility="visible";
            userWrong.style.visibility="visible";
            userRight.style.visibility="hidden";
        }



    }

    if(email.nodeValue.trim()===""){

        email.style.border="1px solid red";
        emailError.innerHTML = "* Email cannot be Empty";
    emailError.style.visibility = "visible";
    emailWrong.style.visibility="visible";
    }
    else{
        if (email.value.trim().match(/^[\w-\.]+@([\w-]+\.)+com$/g)) {
            emailError.style.visibility = "hidden";
            emailWrong.style.visibility = "hidden";
            emailRight.style.visibility = "visible";
            email.style.border = "1px green solid";
          } else {
            email.style.border = "1px red solid";
            emailError.innerHTML = "* Enter a valid email";
            emailError.style.visibility = "visible";
            emailWrong.style.visibility = "visible";
            emailRight.style.visibility = "hidden";
          }
    }

    if (password.value.trim() === "") {
        password.style.border = "1px red solid";
        passwordError.innerHTML = "* Password cannot be Empty";
        pass1Error.style.visibility = "visible";
        pass1Wrong.style.visibility = "visible";
      } else {
        pass1Error.style.visibility = "hidden";
        pass1Wrong.style.visibility = "hidden";
        pass1Right.style.visibility = "visible";
        password.style.border = "1px green solid";
      }
      if (confirmPassword.value.trim() === "") {
        confirmPassword.style.border= "1px red solid";
        pass2Error.innerHTML = "* Password cannot be Empty";
        pass2Error.style.visibility = "visible";
        pass2Wrong.style.visibility = "visible";
      } else {
        if (confirm.value === password.value) {
          pass2Error.style.visibility = "hidden";
          pass2Wrong.style.visibility = "hidden";
          pass2Right.style.visibility = "visible";
          confirmPassword.style.border = "1px green solid";
        } else {
          confirmPassword.style.border = "1px red solid";
          pass2Error.innerHTML = "* Password Should be same as above";
          pass2Error.style.visibility = "visible";
          pass2Wrong.style.visibility = "visible";
          pass2Right.style.visibility = "hidden";
        }
      }


}*/
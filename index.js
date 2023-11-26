const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e=>{
    e.preventDefault();

    validateInput();

});
const setError = (Element,Message) =>{
    const inputcontrol =element.parentElement;
    const errorDisplay = inputcontrol.queryselector('error');

    errorDisplay.innerText = Message;
    inputcontrol.classlist.add('error');
    inputcontrol.classlist.remove('success');
};
const setSuccess = element =>{
    const inputcontrol =element.parentElement;
    const errorDisplay = inputcontrol.queryselector('error');

    errorDisplay.innerText = '';
    inputcontrol.classlist.add('success');
    inputcontrol.classlist.remove('error');
};
const isValidEmail =email =>{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInput = () =>{
    const usernameValue =username.Value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
}
if(usernameValue === ''){
    setError(username,'username is required');

}else{
    setSuccess(username);
}
if(emailValue  === ''){
    setError(error,'email is required');

}else if(!isValidEmail(emailValue)){
    setError(email,'provide a valid email address');

}else{
    setSuccess(email);

}
if(passwordValue === ''){
    setError(password,'password is required');

}else if(passwordValue > 8){
    setError(password,'password must be at least 8 character.')

}else{
    setSuccess(password)
}
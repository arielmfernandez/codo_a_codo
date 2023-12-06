// funciones validacion formularios

// validacion formularios login.html

function validate_login(){
    let user=document.getElementById("user");
    let pass=document.getElementById("pass");
    let error=false;
    // document.getElementById("validateUser").innerHTML="&bnsp; ";
    // document.getElementById("validatePass").innerHTML="&bnsp; ";
    if(user.value==""){
      document.getElementById("validateUser").innerHTML="Debe ingresar un usuario";
      error=true;
      user.focus();
    }
    // if(pass.value==""){
    //   document.getElementById("validatePass").innerHTML="Debe ingresar una contraseña";
    //   error=true;
    //   pass.focus();
    // }
    if(pass.value.length<8){
      document.getElementById("validatePass").innerHTML="La contraseña debe tener al menos 8 caracteres";
      error=true;
      pass.focus();
    }
    if (error == false){
      document.getElementById("user").value=""
      document.getElementById("validateUser").innerHTML="&bnsp;";
      document.getElementById("pass").value=""
      document.getElementById("validatePass").innerHTML="&bnsp;";
      alert("login exitoso")
    }
    return !error;
  }
  
  function validateUser(){
    let user=document.getElementById("user");
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(user.value=="" || !emailRegex.test(user.value)){
      document.getElementById("validateUser").innerHTML="Debe ingresar un correo electrónico válido";
      // user.focus();
    } else {
      document.getElementById("validateUser").innerHTML="";
    }
  }
    
  function validatePass(){
    let pass=document.getElementById("pass");
    let errorMessage = "";
    
    if(pass.value==""){
      errorMessage += "Debe ingresar una contraseña.<br>";
    }
    if(pass.value.length<8){
      errorMessage += "La contraseña debe tener al menos 8 caracteres.<br>";
    }
    if(!/[A-Z]/.test(pass.value)){
      errorMessage += "La contraseña debe tener al menos una mayúscula.<br>";
    }
    if(!/[a-z]/.test(pass.value)){
      errorMessage += "La contraseña debe tener al menos una minúscula.<br>";
    }
    if(!/\d/.test(pass.value)){
      errorMessage += "La contraseña debe tener al menos un número.<br>";
    }
    if(!/[@$!%*?&]/.test(pass.value)){
      errorMessage += "La contraseña debe tener al menos un carácter especial.<br>";
    }
    
    document.getElementById("validatePass").innerHTML = errorMessage;
    
    if(errorMessage != ""){
      // pass.focus();
    }
  }
  
  function validateLoginComplete(){
    validateUser();
    validatePass();
  
    let user=document.getElementById("user");
    let pass=document.getElementById("pass");
    let error=false;
    
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(user.value=="" || !emailRegex.test(user.value)){
      document.getElementById("validateUser").innerHTML="Debe ingresar un correo electrónico válido";
      error=true;
      user.focus();
    } 
    if(pass.value==""){
      document.getElementById("validatePass").innerHTML="Debe ingresar una contraseña";
      error=true;
      pass.focus();
    }
    if(pass.value.length<8){
      document.getElementById("validatePassLength").innerHTML="La contraseña debe tener al menos 8 caracteres";
      error=true;
      pass.focus();
    }
    if(!/[A-Z]/.test(pass.value)){
      document.getElementById("validatePassUpper").innerHTML="La contraseña debe tener al menos una mayúscula";
      error=true;
      pass.focus();
    }
    if(!/[a-z]/.test(pass.value)){
      document.getElementById("validatePassLower").innerHTML="La contraseña debe tener al menos una minúscula";
      error=true;
      pass.focus();
    }
    if(!/\d/.test(pass.value)){
      document.getElementById("validatePassNumber").innerHTML="La contraseña debe tener al menos un número";
      error=true;
      pass.focus();
    }
    if(!/[@$!%*?&]/.test(pass.value)){
      document.getElementById("validatePassSpecial").innerHTML="La contraseña debe tener al menos un carácter especial";
      error=true;
      pass.focus();
    }
    if (error == false){
      document.getElementById("user").value=""
      document.getElementById("validateUser").innerHTML="&nbsp;";
      document.getElementById("pass").value=""
      document.getElementById("validatePass").innerHTML="&nbsp;";
      document.getElementById("validatePassLength").innerHTML="&nbsp;";
      document.getElementById("validatePassUpper").innerHTML="&nbsp;";
      document.getElementById("validatePassLower").innerHTML="&nbsp;";
      document.getElementById("validatePassNumber").innerHTML="&nbsp;";
      document.getElementById("validatePassSpecial").innerHTML="&nbsp;";
      alert("login exitoso")
    }
    return !error;
  }

  function showPassword() {
    var passField = document.getElementById("pass");
    if (passField.type === "password") {
      passField.type = "text";
    } else {
      passField.type = "password";
    }
  }
  
  function goToRegister() {
    window.location.href = "../../customer/account/create.html";
  }
  
  // validacion formularios create.html

   document.querySelector("#registerButton").addEventListener("click", function(event) {
    event.preventDefault();
    var isValid = true;
    var forms = document.querySelectorAll("form");
  
    forms.forEach(function(form) {
      Array.from(form.elements).forEach(function(input) {
        input.classList.remove('invalid');
      });
    });
  
    for (var j = 0; j < forms.length; j++) {
      var inputs = forms[j].elements;
  
      for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].required && !inputs[i].value) {
          isValid = false;
          inputs[i].classList.add('invalid');
        }
      }
  
      if (!isValid) {
        break;
      }
    }
  
    if (!isValid) {
      alert("Por favor, complete todos los campos obligatorios.");
    } else {
      
      forms.forEach(function(form) {
        form.submit();
      });
    }
  });

  function validateCreateUser() {
    var email = document.getElementById('createUser');
    var emailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var emailValidation = document.getElementById('validateCreateUser');
  
    if (!email.value.match(emailFormat)) {
      emailValidation.style.color = 'red';
      emailValidation.innerHTML = 'Por favor, ingrese un correo electrónico válido.';
      // email.focus();
    } else {
      emailValidation.innerHTML = '';
    }
}
  
function validateCreatePass(){
  let pass=document.getElementById("createPass");
  let errorMessage = "";
  
  if(pass.value==""){
    errorMessage += "Debe ingresar una contraseña.<br>";
  }
  if(pass.value.length<8){
    errorMessage += "La contraseña debe tener al menos 8 caracteres.<br>";
  }
  if(!/[A-Z]/.test(pass.value)){
    errorMessage += "La contraseña debe tener al menos una mayúscula.<br>";
  }
  if(!/[a-z]/.test(pass.value)){
    errorMessage += "La contraseña debe tener al menos una minúscula.<br>";
  }
  if(!/\d/.test(pass.value)){
    errorMessage += "La contraseña debe tener al menos un número.<br>";
  }
  if(!/[@$!%*?&]/.test(pass.value)){
    errorMessage += "La contraseña debe tener al menos un carácter especial.<br>";
  }
  
  document.getElementById("validateCreatePass").innerHTML = errorMessage;
  
  if(errorMessage != ""){
    // pass.focus();
  }
}

function checkPasswordStrength() {
  var password = document.getElementById('createPass').value;
  var strengthBar = document.getElementById('strengthBar');
  var strengthText = document.getElementById('strengthText');
  var strength = 0;

  if (password.length >= 8) strength++;
  if (password.match(/[A-Z]/)) strength++;
  if (password.match(/[a-z]/)) strength++;
  if (password.match(/[0-9]/)) strength++;
  if (password.match(/[@$!%*?&]/)) strength++;

  strengthBar.value = strength;

  strengthBar.className = '';
  switch (strength) {
    case 1:
      strengthText.innerHTML = 'Débil';
      strengthBar.classList.add('progress-red');
      break;
    case 2:
      strengthText.innerHTML = 'Normal';
      strengthBar.classList.add('progress-orange');
      break;
    case 3:
      strengthText.innerHTML = 'Fuerte';
      strengthBar.classList.add('progress-yellow');
      break;
    case 4:
      strengthText.innerHTML = 'Muy fuerte';
      strengthBar.classList.add('progress-limegreen');
      break;
    case 5:
      strengthText.innerHTML = 'Excelente';
      strengthBar.classList.add('progress-green');
      break;
    default:
      strengthText.innerHTML = '';
      strengthBar.classList.add('progress-red');
  }
}
  
  function validatePassword() {
    var password = document.getElementById('createPass').value;
    var repeatPassword = document.getElementById('repeatPassword').value;
    var passwordValidation = document.getElementById('validatePassword');
  
    if (password !== repeatPassword) {
      passwordValidation.style.color = 'red';
      passwordValidation.innerHTML = 'Las contraseñas no coinciden.';
      // password.focus();
    } else {
      passwordValidation.innerHTML = '';
    }
  }

  function showPasswordCreate() {
    var passField = document.getElementById("createPass");
    if (passField.type === "password") {
      passField.type = "text";
    } else {
      passField.type = "password";
    }
  }

  // esta funcion esta en construccion

  function createUser() {
    
    var createUser = document.getElementById('createUser');
    var createPass = document.getElementById('createPass');
    var repeatPassword = document.getElementById('repeatPassword');


   
    var hasErrors = false;

   
    if (createUser.value === '' || createPass.value === '' || repeatPassword.value === '') {
    
        alert('Hay campos requeridos que están vacíos.');
        hasErrors = true;
    }

   
    if (!validateCreateUser() || !validateCreatePass() || createPass.value !== repeatPassword.value) {
       
        alert('Hay errores en la información de inicio de sesión.');
        hasErrors = true;
    }

  
    if (!hasErrors) {
        alert('El usuario ha sido creado con éxito.');
    }
}

document.querySelector("#registerButton").addEventListener("click", function(event) {
  
  event.preventDefault();

  
  createUser();
});
  
function validate() {
  let password= document.getElementById("pwd");
  let passwordConfirm= document.getElementById("pwd-confirm");
  if(password.value==passwordConfirm.value) return;
  else alert("Confirm Password was not filled in correctly.");
  }

let submit = document.getElementById("submitBtn")

submit.addEventListener('click', function() {
  if ( validate() ) {
  }
}, false);
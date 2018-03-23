$(document).ready(function() {
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  const numbersValidate= "1234567890";
  const stringValidate="qwertyuiopasdfghjklzxcvbnm";

if (passwordInput.val().trim().length<6) {
  $("#alert").text("YOUR PASSWORD NEED TO BE AT LEAST 6 CHARACTORS");
} else if (numbersValidate.indexOf(passwordInput.val().trim())<0 && stringValidate.indexOf(passwordInput.val().trim())<0) {
  $("#alert").text("YOUR PASSWORD NEED AT LEAST ONE NUMBER AND ONE CHARACTOR");
} else{
  submitFinal();
}

function submitFinal(){
  signUpForm.on("submit", event=> {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      return;

    }
    signUpUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  function signUpUser(email, password) {
    $.post("/api/signup", {
      email: email,
      password: password
    }).then(data=> {
      window.location.replace(data);
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
}
});

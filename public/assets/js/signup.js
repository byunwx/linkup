$(document).ready(function() {
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  const numbersValidate= "1234567890";
  const stringValidate="qwertyuiopasdfghjklzxcvbnm";

if (passwordInput.val().trim().length>6) {

}

function submitFinal(){
  signUpForm.on("submit", function(event) {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    if (!userData.email || !userData.password) {
      $("#alert").text("EMAIL OR PASSWORD DOES NOT MATCH");
      emailInput.val("");
      passwordInput.val("");
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
    }).then(function(data) {
      window.location.replace(data);
    }).catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
}
});

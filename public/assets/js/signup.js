$(document).ready(function() {
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const emailCheck = $("input#email-check");
  const passwordInput = $("input#password-input");
  const passwordCheck = $("input#email-check");
  const birthday= $("input#birthday");

  const numbersValidate = "1234567890";
  const stringValidate = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";

  $("#email-check").on("blur", function(){
    if (emailInput.val().trim() != emailCheck.val().trim() || emailInput.val().trim()=" " ) {
      $("#alert").html("<p>NOT MATCHING PASSWORD</p>");
      document.getElementById("email-check").style.background="red";
    }else{
      document.getElementById("email-check").style.background="lightgreen";
    }
  });
  $("#password-check").on("blur", function(){
    if (passwordInput.val().trim() != passwordCheck.val().trim()) {
      $("#alert").text("NOT MATCHING PASSWORD");
      document.getElementById("password-check").style.background="red";
    } else if (passwordInput.val().trim().length < 6) {
      $("#alert").text("YOUR PASSWORD NEED TO BE AT LEAST 6 CHARACTORS");
      document.getElementById("password-check").style.background="red";
    } else if (numbersValidate.indexOf(passwordInput.val().trim()) < 0 && stringValidate.indexOf(passwordInput.val().trim()) < 0) {
      $("#alert").text("YOUR PASSWORD NEED AT LEAST ONE NUMBER AND ONE CHARACTOR");
      document.getElementById("password-check").style.background="red";
    } else{
      document.getElementById("password-check").style.background="lightgreen";
    }
  });
  birthday.on("blur", function(){
    console.log(birthday.val());
  })

  signUpForm.on("submit", function(event) {
      event.preventDefault();
      if (emailInput.val().trim() != emailCheck.val().trim() || passwordInput.val().trim() != passwordCheck.val().trim()) {
        $("#alert").text("NOT MATCHING EMAIL OR PASSWORD");
      } else if (true) {

      } else if (passwordInput.val().trim().length < 6) {
        $("#alert").text("YOUR PASSWORD NEED TO BE AT LEAST 6 CHARACTORS");
        return;
      } else if (numbersValidate.indexOf(passwordInput.val().trim()) < 0 && stringValidate.indexOf(passwordInput.val().trim()) < 0) {
        $("#alert").text("YOUR PASSWORD NEED AT LEAST ONE NUMBER AND ONE CHARACTOR");
        return;
      } else {
        return submitFinal();
      };

      function submitFinal() {
        const userData = {
          email: emailInput.val().trim(),
          password: passwordInput.val().trim(),
          birthday: birthday.val()
        };

        if (!userData.email || !userData.password) {
          return;

        }
        signUpUser(userData.email, userData.password);
        emailInput.val("");
        passwordInput.val("");
      }
    });

    function signUpUser(email, password, birthday) {
      $.post("/api/user/signup", {
        email: email,
        password: password,
        birthday: birthday
      }).then(data => {
        window.location.replace(data);
      }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }

});

$(document).ready(function() {
  console.log("linked to signup")
  const numbersValidate = "1234567890";
  const stringValidate = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";


  // *****CHANGES FROM DEVELOPMENT****
  const signUpForm = $("#signup-submit");
  const emailInput = $("#email-input");
  const usernameInput = $("#username-input");
  const emailCheck = $("#email-check");
  const passwordInput = $("#password-input");
  const passwordCheck = $("#password-check");
  const birthday= $("#birthday");



  $("#email-check").on("blur", function(){
    if (emailInput.val().trim() != emailCheck.val().trim() || emailInput.val().trim()==" " ) {
      $("#alert").html("NOT MATCHING EMAIL");
      document.getElementById("email-check").style.background="lightpink";
    }else{
      document.getElementById("email-check").style.background="lightgreen";
    }
  });
  $("#password-check").on("blur", function(){
    if (passwordInput.val().trim() != passwordCheck.val().trim()) {
      $("#alert").html("NOT MATCHING PASSWORD");
      document.getElementById("password-check").style.background="lightpink";
    } else if (passwordInput.val().trim().length < 6) {
      $("#alert").html("YOUR PASSWORD NEED TO BE AT LEAST 6 CHARACTORS");
      document.getElementById("password-check").style.background="lightpink";
    } else if (numbersValidate.match(passwordInput.val().trim()) || stringValidate.match(passwordInput.val().trim())) {
      $("#alert").html("YOUR PASSWORD NEED AT LEAST ONE NUMBER AND ONE CHARACTOR");
      document.getElementById("password-check").style.background="lightpink";
    } else{
      document.getElementById("password-check").style.background="lightgreen";
    }
  });
  birthday.on("blur", function(){
    console.log(birthday.val().trim());
  })

  signUpForm.on("click", function(event){
    console.log("submitted first")
      event.preventDefault();
      if (emailInput.val().trim() != emailCheck.val().trim() || emailInput.val().trim()==" " ) {
        $("#alert").html("NOT MATCHING PASSWORD");
        document.getElementById("email-check").style.background="red";
      } else if (passwordInput.val().trim() != passwordCheck.val().trim()) {
        $("#alert").html("NOT MATCHING PASSWORD");
        document.getElementById("password-check").style.background="red";
      } else if (passwordInput.val().trim().length < 6) {
        $("#alert").html("YOUR PASSWORD NEED TO BE AT LEAST 6 CHARACTERS");
        document.getElementById("password-check").style.background="red";
      } else if (numbersValidate.match(passwordInput.val().trim()) || stringValidate.match(passwordInput.val().trim())) {
        $("#alert").html("YOUR PASSWORD NEED AT LEAST ONE NUMBER AND ONE CHARACTER");
        document.getElementById("password-check").style.background="red";
      }

      else {
        // console.log(emailInput.val().trim(), usernameInput.val().trim(), passwordInput.val().trim(), birthday.val());
        return signUpUser(emailInput.val().trim(), usernameInput.val().trim(), passwordInput.val().trim(), birthday.val());
      };

    function signUpUser(email, username, password, birthday) {
      let newUser={};
      if(birthday==""){
        newUser={
          email: email,
          username: username,
          password: password
        }
      }else{
      newUser={
        email:email,
        username: username,
        password: password,
        birthday: birthday
      }
      }
      $.post("/api/user/signup", newUser).then(data => {
        if(data=="/home"){
          console.log(data);
          window.location.replace(data);
        }else{
          $("#alert").text(data.errors[0].message);
          $("#alert").fadeIn(500);
          console.log("im here")
        }
      }).catch(handleLoginErr);
    }

    function handleLoginErr(err) {
      console.log(err)
    }
});

});

$(document).ready(function() {
  console.log("linked")
  // const signUpForm = $(".signup");
  //signup variables
  const emailSignup = $("#email-signup");
  const passwordSignup = $("#password-signup");
  const birthdaySignup= $("#birthday");
  //Login Variables
  const emailLogin = $("#email-login");
  const passwordLogin = $("#password-login");
  const birthdayLogin= $("#birthday");
  const numbersValidate = "1234567890";
  const stringValidate = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";


  // *****CHANGES FROM DEVELOPMENT****
  // const signUpForm = $("#signup-submit");
  // const emailInput = $("#email-input");
  // const emailCheck = $("#email-check");
  // const passwordInput = $("#password-input");
  // const passwordCheck = $("#password-check");
  // const birthday= $("#birthday");



  // $("#email-check").on("blur", function(){
  //   if (emailInput.val().trim() != emailCheck.val().trim() || emailInput.val().trim()==" " ) {
  //     $("#alert").html("NOT MATCHING PASSWORD");
  //     document.getElementById("email-check").style.background="red";
  //   }else{
  //     document.getElementById("email-check").style.background="lightgreen";
  //   }
  // });
  // $("#password-check").on("blur", function(){
  //   if (passwordInput.val().trim() != passwordCheck.val().trim()) {
  //     $("#alert").html("NOT MATCHING PASSWORD");
  //     document.getElementById("password-check").style.background="red";
  //   } else if (passwordInput.val().trim().length < 6) {
  //     $("#alert").html("YOUR PASSWORD NEED TO BE AT LEAST 6 CHARACTORS");
  //     document.getElementById("password-check").style.background="red";
  //   } else if (numbersValidate.match(passwordInput.val().trim()) || stringValidate.match(passwordInput.val().trim())) {
  //     $("#alert").html("YOUR PASSWORD NEED AT LEAST ONE NUMBER AND ONE CHARACTOR");
  //     document.getElementById("password-check").style.background="red";
  //   } else{
  //     document.getElementById("password-check").style.background="lightgreen";
  //   }
  // });
  // birthday.on("blur", function(){
  //   console.log(birthday.val().trim());
  // })

  // signUpForm.on("click", function(event){
  //   console.log("submited first")
  //     event.preventDefault();
  //     if (emailInput.val().trim() != emailCheck.val().trim() || emailInput.val().trim()==" " ) {
  //       $("#alert").html("NOT MATCHING PASSWORD");
  //       document.getElementById("email-check").style.background="red";
  //     } else if (passwordInput.val().trim() != passwordCheck.val().trim()) {
  //       $("#alert").html("NOT MATCHING PASSWORD");
  //       document.getElementById("password-check").style.background="red";
  //     } else if (passwordInput.val().trim().length < 6) {
  //       $("#alert").html("YOUR PASSWORD NEED TO BE AT LEAST 6 CHARACTORS");
  //       document.getElementById("password-check").style.background="red";
  //     } else if (numbersValidate.match(passwordInput.val().trim()) || stringValidate.match(passwordInput.val().trim())) {
  //       $("#alert").html("YOUR PASSWORD NEED AT LEAST ONE NUMBER AND ONE CHARACTOR");
  //       document.getElementById("password-check").style.background="red";
  //     } else if (birthday.val()=="") {
  //       console.log(birthday.val());
  //       $("#alert").html("ENTER BIRTHDAY");
  //     } else {
  //       return signUpUser(emailInput.val().trim(), passwordInput.val().trim(), birthday.val());
  //     };
      //********* */


$("#signup-submit").on("click", function(){
  console.log("clickd login")
    function signUpUser() {
      console.log("sing up post called")
      $.post("/api/user/signup", {
        email:emailSignup.val().trim(),
        password: passwordSignup.val().trim(),
        // birthday: birthday.val()
        // ** FROM DEVELOPMENT **
        // email:email,
        // password: password,
        // birthday: birthday
        //****************** */
      }).then(data => {
        window.location.replace(data);
      }).catch(handleLoginErr);
    }
signUpUser()
    function handleLoginErr(err) {
      $("#alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
    });
    $("#login-submit").on("click", function(){
      console.log("clickd login")
        function loginUser() {
          console.log("login up post called")
          $.post("/api/user/login", {
            email:emailLogin.val().trim(),
            password: passwordLogin.val().trim(),
            // birthday: birthday.val()
          }).then(data => {
            window.location.replace(data);
          }).catch(handleLoginErr);
        }
    loginUser()
        function handleLoginErr(err) {
          $("#alert .msg").text(err.responseJSON);
          $("#alert").fadeIn(500);
        }
        });
});


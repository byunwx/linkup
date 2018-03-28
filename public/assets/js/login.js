$(document).ready(function () {
  // click to open and close Modal
  $(".login-box").hide();
  $(".signup-box").hide();
  $(".newLink-box").hide();
  $(".profile-box").hide();


  $("loginBtn").click(function(){
    $(".login-box").show();
  })
  $("signupBtn").on("click", function(){
    $(".signup-box").show();
  })
  $(".close-btn").click(function(){
    $(".login-box").toggleClass("login-box");
    //
    // $(".signup-box").hide();
    // $(".login-box").hide();
    // $(".newLink-box").hide();
    // $(".profile-box").hide();
  })
    console.log("linked to login")
    const emailInput = $('input#email-signup');
    const passwordInput = $('input#password-signup');

    const loginUser = (email, password) => {
        console.log("login post called")
        $.post('/api/user/login', {
            email: email,
            password: password
        }).then(data => window.location.replace(data)).catch(err => {
          $("#alertSignup").html("NOT MATCHING EMAIL OR PASSWORD");
          document.getElementById("alertSignup").style.color="red";
          console.log(err);
        })
    };
    $("#login-submit").on("click", function () {
        console.log("clicked login")
        let userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim()
        };

        if (!userData.email || !userData.password) {
            return;
        }
        loginUser(userData.email, userData.password);
        emailInput.val('');
        passwordInput.val('');
    });



});

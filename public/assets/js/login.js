$(document).ready(function () {
    console.log("linked to login")
    const emailInput = $('input#email-signup');
    const passwordInput = $('input#password-signup');

    const loginUser = (email, password) => {
        console.log("login post called")
        $.post('/api/user/login', {
            email: email,
            password: password
        }).then(data => window.location.replace(data)).catch(err => console.log(err))
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

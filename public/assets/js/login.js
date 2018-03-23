$(document).ready(function () {
    const loginForm = $('form.login');
    const emailInput = $('input#email-input');
    const passwordInput = $('input#password-input');

    loginForm.on("submit", function (event) {
        event.preventDefault();
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

    const loginUser = (email, password) => {
        $.post('/api/user/login', {
            email: email,
            password: password
        }).then(data => window.location.replace(data)).catch(err => console.log(err))
    }

});
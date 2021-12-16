// submit form
ClickAction('email-sender', (e, elem) => {
    e.preventDefault();
    let emailForm = document.getElementById('email-form');
    if (emailForm) {
        emailForm.submit();
    }
});
// login & register modal click
ClickAction('login-modal', (e, elem) => {
    loadContent('load-modal', 'login', 'auth.js');
});
ClickAction('register-modal', (e, elem) => {
    loadContent('load-modal', 'register', 'auth.js');
});
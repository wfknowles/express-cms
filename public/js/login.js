const logIn = () =>  {
    return new Promise((resolve, reject) => {
        // login
        const email = $('#email-login').val().trim();
        const password = $('#password-login').val().trim();

        // POST login
        fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(dbUserData => {
                resolve(dbUserData);
            })
            .catch(err => {
                // console.log('logIn[Error]', err);
                alert(err.response.statusText);
                reject(err);
            })
    });
}

const signUp = () =>  {
    return new Promise((resolve, reject) => {
        // new user
        const username = $('#username-signup').val().trim();
        const email = $('#email-signup').val().trim();
        const password = $('#password-signup').val().trim();

        // POST user
        fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        })
            .then(dbUserData => {
                resolve(dbUserData);
            })
            .catch(err => {
                // console.log('signUp[Error]', err);
                alert(err.response.statusText);
                reject(err);
            })
    });
}

$(document).on('submit', '.login-form', function(e) {
    e.preventDefault();
    logIn()
        .then(() => {
            // redirect to dashboard
            document.location.replace('/dashboard');
        });
});

$(document).on('submit', '.signup-form', function(e) {
    e.preventDefault();
    signUp()
        .then(() => {
            // redirect to dashboard
            document.location.replace('/dashboard');
        });
});

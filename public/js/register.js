// string is valid
const isMatch = (string1, string2) => {
    if (string1 == string2) {
        return true;
    } else {
        return false;
    }
}

// if password is valid, create user
const registerUser = () =>  {
    return new Promise((resolve, reject) => {
        const username = $('#user-name').val().trim();
        const email = $('#user-email').val().trim();
        const password = $('#user-password').val().trim();
        const passwordCheck = $('#user-password-check').val().trim();
        const match = isMatch(password, passwordCheck);
        // string validation done via html - pattern="regex"

        console.log('registerUser:', match);
        if (match) {
            createUser(username, email, password)
                .then(dbUserData => {
                    resolve(dbUserData);
                })
                .catch(err => {
                    reject(err);
                });
        } else {
            reject();
        }
    });
}

// post user to api
const createUser = (username, email, password) => {
    return new Promise((resolve, reject) => {
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
                reject(err);
            });
    });
}

// render errors
const $renderCreateErrors = errorCode => {

    const $passwordEl = $('#user-password');
    const $passwordCheckEl = $('#user-password-check');
    const $feedbackEl = $('valid-feedback');

    switch (errorCode) {
        case 1:
            // valid and dont match
            $feedbackEl.text("Passwords don't match");
            $passwordEl.addClass('is-invalid');
            $passwordCheckEl.addClass('is-invalid');
            $passwordEl.parent('.form-control').append(feedbackEl);
            $passwordCheckEl.parent('.form-control').append(feedbackEl);
            break;
        case 2:
            // password invalid
            $feedbackEl.text("* Must be between 8 and 16 characters\n* Must contain special characters");
            $passwordEl.addClass('is-invalid');
            $passwordEl.parent('.form-control').append(feedbackEl);
            break;
        case 3:
            // password invalid and doesn't match
            $feedbackEl.text("* Must be between 8 and 16 characters\n* Must contain special characters\n* Passwords must match");
            $passwordEl.addClass('is-invalid');
            $passwordCheckEl.addClass('is-invalid');
            $passwordEl.parent('.form-control').append(feedbackEl);
            $passwordCheckEl.parent('.form-control').append(feedbackEl);
            break;
    }

    return errorCode;
}

// form submission
$(document).on('submit', 'form.register', function(e) {
    e.preventDefault();
    console.log('clicked!');
    registerUser()
        .then(response => response.json)
        .then(dbUserData => {
            // redirect to dashboard
            document.location.replace('/dashboard');
        })
        .catch(errorCode => {
            // display errors
            $renderCreateErrors(errorCode);
        });
});
const logIn = () =>  {
    return new Promise((resolve, reject) => {
        // login
        const email = $('#user-email').val().trim();
        const password = $('#user-password').val().trim();

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

$(document).on('submit', 'form.login', function(e) {
    e.preventDefault();
    console.log('clicked!');
    logIn()
        .then(() => {
            // redirect to dashboard
            location.replace('/dashboard');
        });
});

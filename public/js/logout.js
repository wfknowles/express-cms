const logOut = () => {
    return new Promise((resolve, reject) => {
        fetch('/api/users/logout', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(() => {
            resolve();
        })
        .catch(err => {
            // console.log('logOut[Error]', err);
            alert(err.response.statusText);
            reject(err);
        })
    })
}

$(document).on('click', '#logout', function(e) {
  e.preventDefault();
  logOut()
      .then(() => {
          // redirect to dashboard
          document.location.replace('/');
      });
});

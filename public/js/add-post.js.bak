const addPost = () => {
    return new Promise((resolve, reject) => {
        //new post
        const title = $('input[name="post-title"]').val().trim();
        const post_url = $('input[name="post-url"]').val().trim();

        // POST post
        fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title,
                post_url
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(dbPostData => {
                resolve(dbPostData)
            })
            .catch(err => {
                // console.log('addPost[Error]', err);
                alert(err.response.statusText);
                reject(err);
            })
    });
}

$(document).on('submit', '.new-post-form', function(e) {
    e.preventDefault();
    addPost()
        .then(() => {
            // redirect to dashboard
            document.location.replace('/dashboard');
        });
});


const editPost = () => {
    return new Promise((resolve, reject) => {
        //edit post
        const title = $('input[name="post-title"]').val().trim();
        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];
  

        // PUT post
        fetch(`/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(dbPostData => {
                resolve(dbPostData);
            })
            .catch(err => {
                // console.log('addPost[Error]', err);
                alert(err.response.statusText);
                reject(err);
            })
    });
}

$(document).on('submit', '.edit-post-form', function(e) {
    e.preventDefault();
    editPost()
        .then(() => {
            // redirect to dashboard
            document.location.replace('/dashboard');
        });
});


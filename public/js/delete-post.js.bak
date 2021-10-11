const deletePost = () => {
    return new Promise((resolve, reject) => {
        //post.id
        const id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];

        // DELETE post
        fetch(`/api/posts/${id}`, {
            method: 'DELETE'
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

$(document).on('click', '.delete-post-btn', function(e) {
    e.preventDefault();
    deletePost()
        .then(() => {
            // redirect to dashboard
            document.location.replace('/dashboard');
        });
});

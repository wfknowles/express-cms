const addComment = () => {
    return new Promise((resolve, reject) => {
        //new comment
        const comment_text = $('textarea[name="comment-body"]').val().trim();
        const post_id = window.location.toString().split('/')[
            window.location.toString().split('/').length - 1
        ];

        // POST comment
        fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(dbCommentData => {
                resolve(dbCommentData)
            })
            .catch(err => {
                // console.log('addPost[Error]', err);
                alert(err.response.statusText);
                reject(err);
            })
    });
}

$(document).on('submit', '.comment-form', function(e) {
  e.preventDefault();
  addComment()
      .then(() => {
          // reload page
          document.location.reload();
      });
});





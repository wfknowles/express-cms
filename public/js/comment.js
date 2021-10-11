const addComment = (post_id) => {
    return new Promise((resolve, reject) => {
        //new comment
        const content = $('#new-comment-content').val().trim();
        const user_id = $('#new-comment-user-id').val().trim();

        // POST comment
        fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                content: content,
                user_id: user_id,
                post_id: post_id
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(dbCommentData => {
                resolve(dbCommentData)
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    });
}

const destroyComment = (id) => {
    return new Promise((resolve, reject) => {
        // POST comment
        fetch(`/api/comments/${id}`, {
            method: 'DELETE',
        })
            .then(dbCommentData => {
                resolve(dbCommentData)
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    });
}

const getCommentForm = (post_id) => {
    return new Promise((resolve, reject) => {
        // GET partial for comment
        fetch(`/dashboard/comment/${post_id}`)
            // .then(response => response.json())
            .then(newCommentEl => {
                resolve(newCommentEl);
            })
            .catch(err => {
                console.log(err);
                reject(err);
            })
    });
}

// comment submission
$(document).on('submit', '[id^=new-comment-]', function(e) {
  e.preventDefault();
  const id = this.id.split('-').pop();
  addComment(id)
      .then(() => {
          // reload page
          document.location.reload();
      });
});

// add comment
$(document).on('click', '[id^=add-comment-]', function(e) {
    const id = this.id.split('-').pop();
    getCommentForm(id)
        .then(response => response.text())
        .then(html => {
            $(`#comment-anchor-${id}`).html(html);
        });
});

// delete comment
$(document).on('click', '[id^=delete-comment-]', function(e) {
    const id = this.id.split('-').pop();
    destroyComment(id)
        .then(() => {
            document.location.reload();
        });
});

// view comments
$(document).on('click', '[id^=view-comments-]', function(e) {
    const id = this.id.split('-').pop();
    console.log('view comments!', id);
    $(`#comments-wrapper-${id}`).removeClass('d-none');
    $(`#view-comments-${id}`).hide();
});

// resize textareas
$(document).on('input', '.textarea', function(e) {
    const height = e.target.scrollHeight;
    console.log('height', height);
    $(e.target).css({'height': `${height}px`});
    // console.log('height', height);
});





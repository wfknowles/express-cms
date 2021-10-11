// initialize tinymce
tinymce.init({
    selector: '#post-content'
});


const submitPost = () => {
    return new Promise((resolve, reject) => {
        let fetchMethod, fetchUrl;
        const post_id = $('#post-id').val().trim();
        const title = $('#post-title').val().trim();
        const feature_image = $('#post-feature-image').val().trim();
        const content = tinymce.activeEditor.getContent();
        
        // update or create?
        if (post_id) {
            fetchMethod = "PUT";
            fetchUrl = `/api/posts/${post_id}`
        } else {
            fetchMethod =  "POST";
            fetchUrl = '/api/posts';
        }

        // make request
        fetch(fetchUrl, {
            method: fetchMethod,
            body: JSON.stringify({
                title: title,
                feature_image: feature_image,
                content: content
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(dbPostData => {
                resolve(dbPostData)
            })
            .catch(err => {
                console.log(err);
                reject(err);
            });
    });
}

const destroyPost = (id) => {
    return new Promise((resolve, reject) => {
        // DELETE post
        fetch(`/api/posts/${id}`, {
            method: 'DELETE'
        })
            .then(dbPostData => {
                resolve(dbPostData)
            })
            .catch(err => {
                reject(err);
            })
    });
}

// post submission
$(document).on('submit', '[id^=post-]', function(e) {
    e.preventDefault();
    submitPost()
        .then(response => response.json())
        .then(() => {
            document.location.replace(document.referrer);
        });
});

// delete post
$(document).on('click', '[id^=delete-post-]', function(e) {
    e.preventDefault();
    const id = this.id.split('-').pop();
    destroyPost(id)
        .then(() => {
            document.location.reload();
        });
});
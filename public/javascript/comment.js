// Modeled after just-tech-news from U of U bootcamp
async function commentHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('input[name="comment-text"]').value.trim();

    const post_id = window.location.toString().split('/')
    [window.location.toString().split('/').length - 1];

    if (comment_text) {
        const response = await fetch ('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                post_id,
                comment_text
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('comment-form').addEventListener('submit', commentHandler)
async function editPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('post-title').value.trim();
    const post_content = window.location.toString().split('/')
    [window.location.toString().split('/').length - 1];

    const response = await fetch('/api/posts', {
        method: 'put',
        body: JSON.stringify({
            title,
            post_content
        })
    })
}
async function editPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('input[name="post-title"]').value.trim();
    const content = window.location.toString().split('/')
    [window.location.toString().split('/').length - 1];

    const response = await fetch('/api/posts', {
        method: 'put',
        body: JSON.stringify({
            post_id: id,
            title,
            content
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText)
    }
}

document.querySelector('#edit-post').addEventListener('submit', editPostHandler);
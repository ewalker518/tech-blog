async function deletePostHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')
    [window.location.toString().split('/').length - 1];

    const response = await fetch('/api/posts', {
        method: 'delete',
        body: JSON.stringify({
            post_id: id
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}

document.querySelector('delete-btn').addEventListener('click', deletePostHandler);
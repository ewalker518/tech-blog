async function newPostHandler(event) {
    event.preventDefault();

    const title = document.querySelector('post-title').value.trim();
    const text = document.querySelector('post-text').value.trim();

    const response = await fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
            title,
            text
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('new-post-form').addEventListener('submit', newPostHandler);
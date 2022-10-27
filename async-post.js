const file = document.querySelector('#file');
const text = document.querySelector('#text');
const add = document.querySelector('#add-content');
const message = document.querySelector('#message');

add.addEventListener('click', (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file.files[0]);
    formData.append('text', text.value);
    async function postData() {
        const response = await fetch('async-post.php', {
            method: 'POST',
            body: formData
        });
        const data = await response.json();
        console.log(data);
        message.innerHTML = data.message;
    }
    postData();
});

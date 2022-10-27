const result = document.querySelector('#result');

window.addEventListener('load', async () => {
    const response = await fetch('async-get.php');
    const data = await response.json();
    for (const item of data) {
        result.innerHTML += `<img src="uploads/${item.image}"></img><p>${item.text}</p>`;
    }
}
);
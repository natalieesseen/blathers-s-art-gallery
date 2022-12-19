let content = document.getElementById('content');

async function fetchData() {
    const URL = ('http://acnhapi.com/v1/art/');
    const res = await fetch(URL);
    const data = await res.json();

    displayArt(data);
}
fetchData();

function displayArt(data) {
    for (key in data) {
        let isCounterfeit = '';

        if(data[key]['hasFake']) {
            isCounterfeit = '<div class="has-fake">🦊</div>';
        } else {
            isCounterfeit = '';
        }

        content.innerHTML += `
        <div class="art-card">
        <h2>${data[key]['name']['name-USen']}</h2>
        ${isCounterfeit}
        <img src="${data[key]['image_uri']}" />
        <p>${data[key]['museum-desc']}</p>
        </div>
    `
    };
}
import './sass/main.scss';

const refs = {
    menuList: document.querySelector('.menu__list'),
    markupMain: document.querySelector('.markup__main'),
};
const baseUrl = 'https://rickandmortyapi.com/api';

function getDataServer(url) {
    return fetch(url).then(response => response.json());
}

getDataServer(baseUrl).then(data => {
    const markup = Object.entries(data)
        .map(([key, value]) => `<li><a href="${value}">${key}</a></li>`)
        .join('');
    refs.menuList.innerHTML = markup;
});
document.addEventListener('click', onClickEvent);

function onClickEvent(e) {
    if (e.target.nodeName !== 'A') return;
    e.preventDefault();
    getDataServer(e.target.href).then(data => {
        console.log(data.results);
        const markupImage = data.results
            .map(
                character => `<li class="main-item"><img src="${character.image}">
      <ul class="item-list">
<li class="item-text">Name: ${character.name}</li>
<li class="item-text">Gender: ${character.gender}</li>
<li class="item-text">Adress: ${character.origin.name}</li>
<li class="item-text">Species: ${character.species}</li>
<li class="item-text">Status: ${character.status}</li>
</ul>
      </li>`,
            )
            .join('');
        refs.markupMain.innerHTML = markupImage;
    });
}
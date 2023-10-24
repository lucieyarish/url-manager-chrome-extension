let myLinks = [];
const inputEl = document.getElementById('input-el');
const inputBtnEl = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

let linksFromLocalStorage = JSON.parse(localStorage.getItem('myLinks'));

if (linksFromLocalStorage) {
  myLinks = linksFromLocalStorage;
  renderLinks();
}

inputBtnEl.addEventListener('click', function () {
  myLinks.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLinks', JSON.stringify(myLinks));
  renderLinks();
});

function renderLinks() {
  let listItems = '';
  for (i = 0; i < myLinks.length; i++) {
    listItems += `
        <li>
            <a target="_blank" href="${myLinks[i]}">
                ${myLinks[i]}
            </a>
        </li>
    `;
  }
  ulEl.innerHTML = listItems;
}

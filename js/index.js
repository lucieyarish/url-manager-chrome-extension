let myLinks = [];
const inputEl = document.getElementById('input-el');
const saveBtn = document.getElementById('save-btn');
const deleteBtn = document.getElementById('delete-btn');
const ulEl = document.getElementById('ul-el');

const linksFromLocalStorage = JSON.parse(localStorage.getItem('myLinks'));

if (linksFromLocalStorage) {
  myLinks = linksFromLocalStorage;
  render(myLinks);
}

function render(links) {
  let listItems = '';
  for (i = 0; i < links.length; i++) {
    listItems += `
          <li>
              <a target="_blank" href="${links[i]}">
                  ${links[i]}
              </a>
          </li>
      `;
  }
  ulEl.innerHTML = listItems;
}

saveBtn.addEventListener('click', function () {
  myLinks.push(inputEl.value);
  inputEl.value = '';
  localStorage.setItem('myLinks', JSON.stringify(myLinks));
  render(myLinks);
});

deleteBtn.addEventListener('dblclick', function () {
  localStorage.clear();
  myLinks = [];
  render(myLinks);
});

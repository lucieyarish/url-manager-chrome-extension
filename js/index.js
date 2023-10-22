let myLinks = [];
const inputEl = document.getElementById('input-el');
const inputBtnEl = document.getElementById('input-btn');
const ulEl = document.getElementById('ul-el');

inputBtnEl.addEventListener('click', function () {
  myLinks.push(inputEl.value);
  inputEl.value = '';
  renderLinks();
});

function renderLinks() {
  let listItems = '';
  for (i = 0; i < myLinks.length; i++) {
    listItems += '<li>' + myLinks[i] + '</li>';
  }

  ulEl.innerHTML = listItems;
}

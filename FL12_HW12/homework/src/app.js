document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', (e) => {
    let hash = window.location.hash;
    let root = document.getElementById('root');
    let section = document.getElementsByTagName('section');
    if (hash = '#add') {
      addNewSet(section);
    }
  })
});
const addNewSet = (section) => {
  let name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('placeholder', 'Name');
  name.setAttribute('id', 'newSet');
  let container = document.createElement('div');
  let add = document.createElement('input');
  add.setAttribute('type', 'button');
  add.setAttribute('value', 'Add terms');
  add.setAttribute('id', 'add');
  let save = document.createElement('input');
  save.setAttribute('type', 'button');
  save.setAttribute('value', 'Save changes');
  save.setAttribute('id', 'save');
  let cancel = document.createElement('input');
  cancel.setAttribute('type', 'button');
  cancel.setAttribute('value', 'Cancel');
  cancel.setAttribute('id', 'cancel');
  section[0].appendChild(name);
  section[0].appendChild(container);
  section[0].appendChild(add);
  section[0].appendChild(save);
  section[0].appendChild(cancel);
  add.addEventListener('click', createNewTerm.bind(null, container));
  save.addEventListener('click', saveNewSet.bind(null, name));
}
const saveNewSet = (name, e) => {
  const set = [];
  let terms = document.getElementsByName('term');
  let definitions = document.getElementsByName('definition');
  if (name.value !== '') {
    for (let i = 0; i < terms.length; i++) {
      if (terms[i].value !== '' || definitions[i].value !== '') {
        set.push({
          term: terms[i].value,
          definition: definitions[i].value
        })
      }
      localStorage.setItem(`item:${name.value}`, JSON.stringify(set));
      window.location.replace("/");
    }
  }
  
}
const createNewTerm = (container, e) => {
  let item = document.createElement('div');
  container.appendChild(item);
  let term = document.createElement('input');
  term.setAttribute('type', 'text');
  term.setAttribute('placeholder', 'Enter term');
  term.setAttribute('name', 'term')
  let def = document.createElement('input');
  def.setAttribute('type', 'text');
  def.setAttribute('name', 'definition')
  def.setAttribute('placeholder', 'Enter definition');
  let deleteButton = document.createElement('input');
  deleteButton.setAttribute('type', 'button');
  deleteButton.setAttribute('value', 'Delete term');
  item.appendChild(term);
  item.appendChild(def);
  item.appendChild(deleteButton);
  deleteButton.addEventListener('click', removeCurrentItem.bind(null, item));
}
const saveInput = (input, e) => {
  input = e.target.value
}
const removeCurrentItem = (item, event) => {
  item.remove();
}
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  mainPage(root);
  window.addEventListener('hashchange', (e) => {
    let hash = window.location.hash;
    if (hash === '#add') {
      addNewSet(root);
    } else {
      if (window.location.href.split('item:').length > zero) {
        modifySet(root);
      }
    }
  })
});
const zero = 0;
const createElem = (tag, root, prop) => {
  const name = document.createElement(tag);
  if (typeof prop !== 'undefined' && prop) {
    for (let key in prop) {
      if (key) {
        name.setAttribute(key, prop[key]);
      }
    }
  }
  root.appendChild(name);
  return name
}
const mainPage = (root) => {
  const section = createElem('section', root)
  if (window.location.href.split('#').length > 1) {
    window.location = window.location.href.split('#')[zero];
  }
  const header = document.getElementsByTagName('header')[zero];
  const addNewSet = createElem('a', header, {
    'href': '#add',
    'id': 'addNewSet'
  });
  addNewSet.innerText = 'Add new';
  for (let key in localStorage) {
    if (key) {
      let fullName = key.split('item:')
      if (fullName.length > 1) {
        const set = showSet(section, key, fullName, false);
        set.addEventListener('click', setDone.bind(null, key, section));
        let edit = createElem('a', set, {
          'href': `#modify:${key}`,
          'id': 'modify'
        });
        edit.innerText = 'Edit';
        let del = createElem('input', set, {
          'type': 'button',
          'value': 'Delete'
        });
        del.addEventListener('click', (e) => set.remove());
      }
    }
  }
}
const showSet = (section, key, fullName, isModify) => {
  const set = createElem('div', section, {
    'class': 'set inWork',
    'id': `${key}`
  });
  let name = createElem('input', set, {
    'type': 'text',
    'value': `${fullName[1]}`,
    'name': 'name'
  });
  let terms = JSON.parse(localStorage[key]);
  for (let i = zero; i < terms.length; i++) {
    let term = createElem('input', set, {
      'type': 'text',
      'value': `${terms[i].term}`,
      'name': 'term'
    });
    if (!isModify) {
      term.setAttribute('disabled', '')
    }
    let def = createElem('input', set, {
      'type': 'text',
      'value': `${terms[i].definition}`,
      'name': 'definition'
    });
    if (!isModify) {
      term.setAttribute('disabled', '');
      def.setAttribute('disabled', '');
      name.setAttribute('disabled', '')
    }
  }
  return set;
}

const setDone = (key, root, e) => {
  let arr = document.getElementsByClassName('set');
  let item = arr.item(key);
  if (item.classList.contains('inWork')) {
    item.remove();
    root.appendChild(item);
  }
  item.classList.toggle('inWork');
}

const addNewSet = (root) => {
  document.getElementById('addNewSet').remove();
  document.getElementsByTagName('section')[zero].remove();
  const section = createElem('section', root);
  const name = createElem('input', section, {
    'type': 'text',
    'placeholder': 'Add name'
  });
  const container = createElem('div', section)
  const add = createElem('input', section, {
    'type': 'button',
    'value': 'Add terms'
  });
  const save = createElem('input', section, {
    'type': 'button',
    'value': 'Save changes'
  });
  const cancel = createElem('input', section, {
    'type': 'button',
    'value': 'Cancel'
  });
  add.addEventListener('click', createNewTerm.bind(null, container));
  save.addEventListener('click', saveNewSet.bind(null, name));
  cancel.addEventListener('click', (e) => window.location.replace('/'))
}

const saveNewSet = (name, e) => {
  const set = [];
  const terms = document.getElementsByName('term');
  const definitions = document.getElementsByName('definition');
  if (name.value !== '') {
    for (let i = zero; i < terms.length; i++) {
      if (terms[i].value !== '' || definitions[i].value !== '') {
        set.push({
          term: terms[i].value,
          definition: definitions[i].value
        })
      }
      localStorage.setItem(`item:${name.value}`, JSON.stringify(set));
      console.log('aha')
      window.location.replace('/');
    }
  }

}
const createNewTerm = (container, e) => {
  const item = createElem('div', container);
  createElem('input', item, {
    'type': 'text',
    'placeholder': 'Enter term',
    'name': 'term'
  });
  createElem('input', item, {
    'type': 'text',
    'placeholder': 'Enter definition',
    'name': 'definition'
  });
  const deleteButton = createElem('input', item, {
    'type': 'button',
    'value': 'Delete term'
  });
  deleteButton.addEventListener('click', removeCurrentItem.bind(null, item));
}

const removeCurrentItem = (item, event) => {
  item.remove();
}

const modifySet = (root) => {
  document.getElementById('addNewSet').remove();
  document.getElementsByTagName('section')[zero].remove();
  const section = createElem('section', root);
  const id = window.location.href.split('#modify:')[1];
  for (let key in localStorage) {
    if (key === id) {
      showSet(section, key, id.split('item:'), true)
    }
  }
  const save = createElem('a', section);
  save.innerText = 'Save changes';
  const cancel = createElem('a', section, {
    'href': '/'
  });
  cancel.innerText = 'Cancel';
  save.addEventListener('click', (e) => {
    for (let key in localStorage) {
      if (key === id) {
        localStorage.removeItem(id);
        let newName = document.getElementsByName('name')[zero]
        saveNewSet(newName);
      }
    }
  })
}
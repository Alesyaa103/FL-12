const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

const rootNode = document.getElementById('root');

document.addEventListener('DOMContentLoaded', () => {
  makeTree(rootNode, structure);
  showTree(rootNode.firstChild);
});

const makeTree = (root, arr) => {
  const list = document.createElement('ul');
  list.style.display = 'none';
  root.appendChild(list);
  if (!arr) {
    empty(list);
  } else {
    for (let i = 0; i < arr.length; i++) {
      let rec = document.createElement('li');
      list.appendChild(rec);
      let obg = makeLeaf(rec, arr[i]);
      makeTree(rec, arr[i].children);
      if (arr[i].hasOwnProperty('folder')) {
        obg.addEventListener('click', () => {
          arr[i].folder = !arr[i].folder;
          arr[i].folder === false ? showTree(rec.lastChild) : removeTree(rec.lastChild);
        })
      }

    }
  }
}

const empty = (list) => {
  let rec = document.createElement('li');
  list.appendChild(rec);
  let obg = document.createElement('div');
  obg.classList.add('recrut');
  obg.innerText = 'folder is empty';
  rec.appendChild(obg);
}

const removeTree = (list) => {
  list.style.display = 'none';
  let img = list.previousSibling;
  img.firstChild.innerText = 'folder';
}

const showTree = (list) => {
  list.style.display = 'block';
  let img = list.previousSibling;
  img.firstChild.innerText = 'folder_open';
}

const makeLeaf = (rec, el) => {
  let obg = document.createElement('div');
  obg.classList.add('recrut');
  rec.appendChild(obg);
  let img = document.createElement('i');
  img.classList.add('material-icons');
  if (el.hasOwnProperty('folder')) {
    img.innerText = 'folder';
    img.style.color = '#F0BF00';
  } else {
    img.style.color = '#BABABC';
    img.innerText = 'insert_drive_file';
  }
  let name = document.createElement('p');
  name.innerText = el.title;
  obg.appendChild(img);
  obg.appendChild(name);
  return obg;
}

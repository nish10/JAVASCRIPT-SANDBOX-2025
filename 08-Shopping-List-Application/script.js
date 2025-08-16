const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');
const itemFilter = document.getElementById('filter');

function createIcon(classes) {
  const icon = document.createElement('i');
  icon.className = classes;

  return icon;
}

function createButton(classes) {
  const button = document.createElement('button');

  button.className = classes;

  const icon = createIcon('fa-solid fa-xmark');

  button.appendChild(icon);

  return button;
}

function onAddItemSubmit(e) {
  e.preventDefault();

  // Validate input
  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item');
    return;
  }

  // create item DOM element
  addItemToDOM(newItem);

  // Add item to local storage
  addItemToStorage(newItem);

  checkUI();

  itemInput.value = '';
}

function addItemToDOM(item) {
  // Create list item
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(item));

  //   console.log(li);

  const button = createButton('remove-item btn-link text-red');
  //   li.appendChild(createButton);

  li.appendChild(button);

  // add li to dom
  itemList.appendChild(li);
}

function addItemToStorage(item) {
  let itemsFromStorage;

  if (localStorage.getItem('items') === null) {
    itemsFromStorage = [];
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'));
  }

  // Add new item to array
  itemsFromStorage.push(item);

  // Conver to JSON String and set to localStorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage));
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      checkUI();
    }
  }
}

function clearItems(e) {
  //   itemList.innerHTML = '';
  //  OR
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }

  checkUI();
}

function filterItems(e) {
  const items = itemList.querySelectorAll('li');
  const text = e.target.value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.firstChild.textContent.toLowerCase();
    console.log(itemName);

    if (itemName.indexOf(text) !== -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll('li');
  if (items.length === 0) {
    clearButton.style.display = 'none';
    itemFilter.style.display = 'none';
  } else {
    clearButton.style.display = 'block';
    itemFilter.style.display = 'block';
  }
}

// Event Listeners
itemForm.addEventListener('submit', onAddItemSubmit);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems);
itemFilter.addEventListener('input', filterItems);

checkUI();

// localStorage.setItem('name', 'Nishant');

// console.log(localStorage.getItem('name'));

// // localStorage.removeItem('name');

// localStorage.clear();

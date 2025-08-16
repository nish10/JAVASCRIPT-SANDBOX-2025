const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearButton = document.getElementById('clear');

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

function addItem(e) {
  e.preventDefault();

  // Validate input
  const newItem = itemInput.value;

  if (newItem === '') {
    alert('Please add an item');
    return;
  }
  // Create list item

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(newItem));

  //   console.log(li);

  const button = createButton('remove-item btn-link text-red');
  //   li.appendChild(createButton);

  li.appendChild(button);

  itemList.appendChild(li);

  itemInput.value = '';
}
function removeItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    console.log('click');
    e.target.parentElement.parentElement.remove();
  }
}

function clearItems(e) {
  //   itemList.innerHTML = '';
  //  OR
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// Event Listeners
itemForm.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
clearButton.addEventListener('click', clearItems);

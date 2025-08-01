// insertAfter

function insertAfter(newElement, existingElement) {
  // console.log(existingElement.parentElement);

  existingElement.parentElement.insertBefore(newElement, existingElement.nextSibling);
}

// new element to insert

const li = document.createElement('li');

li.textContent = 'Insert me after';

// Existing element to insert after
const firstItem = document.querySelector('li:first-child');

// our custom function

insertAfter(li, firstItem);

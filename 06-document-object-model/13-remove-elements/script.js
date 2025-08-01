function removeClearButton() {
  const clearBtn = document.querySelector('#clear');

  clearBtn.remove();
}

removeClearButton();

function removeFirstItem() {
  const ul = document.querySelector('ul');

  const li = document.querySelector('li:nth-child(1)');

  ul.removeChild(li);
}

// removeFirstItem();

function removeItem(itemNumber) {
  const ul = document.querySelector('ul');

  // const li = document.querySelector(`li:nth-child(${itemNumber})`);

  const li = document.querySelectorAll('li')[`${itemNumber}` - 1];

  ul.removeChild(li);
}

// removeItem(2);

function removeItem3(itemNumber) {
  const li = document.querySelectorAll('li');

  li[itemNumber - 1].remove();
}

// removeItem3(1);

const removeItem4 = (itemNumber) => document.querySelectorAll('li')[itemNumber - 1].remove();

// removeItem4(1);

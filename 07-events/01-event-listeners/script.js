const clearBtn = document.querySelector('#clear');

function onClear() {
  // alert('clear items');

  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');

  // itemList.innerHTML = '';

  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

// javascript event listener

// clearBtn.onclick = function () {
//   // alert('Clear items');

//   console.log('Clear Items');
// };

// clearBtn.onclick = function () {
//   alert('Clear items');

//   // console.log('Clear Items');
// };

// addEventListener

// clearBtn.addEventListener('click', () => alert('Clear Items'));
8;
// clearBtn.addEventListener('click', () => console.log('Clear Items'));

clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// setTimeout(() => clearBtn.click(), 5000);

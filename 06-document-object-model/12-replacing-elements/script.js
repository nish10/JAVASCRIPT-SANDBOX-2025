function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child');

  const li = document.createElement('li');

  li.textContent = 'New First Item';

  firstItem.replaceWith(li);
}

replaceFirstItem();

function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)');

  secondItem.outerHTML = '<li>Replaced Second Item</li>';

  secondItem.replaceWith(secondItem);
}

replaceSecondItem();

function replaceAllItems() {
  const lis = document.querySelectorAll('li');

  // lis.forEach((item, index) => {
  //   // item.outerHTML = `<li>Replaced Item ${index + 1}</li>`;

  //   if (index === 1) {
  //     item.innerHTML = 'Replaced Second Item';
  //   } else {
  //     item.innerHTML = `Replaced Item ${index + 1}`;
  //   }

  //   // item.innerHTML = 'Replace All Items';
  // });

  lis.forEach(
    (item, index) =>
      (item.outerHTML =
        index === 1 ? '<li>Replaced Second Item</li>' : `<li>Replaced Item ${index + 1}</li>`)
  );
}

replaceAllItems();

function replaceChildHeading() {
  const header = document.querySelector('header');

  const h1 = document.querySelector('header h1');

  const h2 = document.createElement('h2');

  h2.id = 'app-title';
  h2.textContent = 'Shopping List H2';

  header.replaceChild(h2, h1);
}

replaceChildHeading();

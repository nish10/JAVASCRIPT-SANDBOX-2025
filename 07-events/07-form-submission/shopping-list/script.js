const form = document.getElementById('item-form');

function onSubmit(e) {
  e.preventDefault();
  // console.log('submit');

  const item = document.getElementById('item-input').value;
  const priority = document.getElementById('priority-input').value;

  if (item === '' || priority === '0') {
    alert('Please fill in all fields');
    return;
  }

  console.log(item, priority);
}

function onSubmit2(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const item = formData.get('item');

  const priority = formData.get('priority');

  const entries = formData.entries(); // its  a iterator

  console.log(entries);

  for (let entry of entries) {
    console.log(entry);
  }

  // since entries is a iteration and not an array
  // hence once consumed in for loop, cant be used again in this next for loop

  for (let newEntry of entries) {
    console.log('hi');
    console.log(newEntry[1]);
  }
}

// form.addEventListener('submit', onSubmit);
form.addEventListener('submit', onSubmit2);

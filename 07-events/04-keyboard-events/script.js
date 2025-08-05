const itemInput = document.getElementById('item-input');

const onKeyPress = () => {
  console.log('key press');
};

const onKeyUp = () => {
  console.log('key up');
};

const onKeyDown = (e) => {
  // console.log('key down');

  // key
  console.log(e.key);
  // document.querySelector('h1').textContent = e.key;
  // if (e.key === 'Enter') {
  //   alert('you pressed enter');
  // }
  // key code

  if (e.keyCode === 13) {
    alert('you pressed enter');
  }

  // code
  // console.log(e.code);
  if (e.code === 'Digit1') {
    console.log('you pressed 1');
  }

  if (e.repeat) {
    console.log('you are holding down ' + e.key);
  }

  console.log('Shift: ' + e.shiftKey);

  console.log('Control: ', e.ctrlKey);

  console.log('Alt: ', e.altKey);
};

// itemInput.addEventListener('keypress', onKeyPress);

// itemInput.addEventListener('keyup', onKeyUp);

itemInput.addEventListener('keydown', onKeyDown);

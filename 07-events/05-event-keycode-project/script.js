// Method 1 - Nish Way

const input = document.querySelector('body');

const keyInput = (e) => {
  const key = document.querySelector('#key');

  key.childNodes.forEach((node) => {
    if (node.nodeName === '#text' && node.nextSibling !== null) {
      if (node.nextSibling.nodeName === 'SMALL') {
        if (e.key === ' ') {
          node.textContent = 'Space';
        } else {
          node.textContent = e.key;
        }
      }
    }
  });

  const keyCode = document.querySelector('#keyCode');

  keyCode.childNodes.forEach((node) => {
    if (node.nodeName === '#text' && node.nextSibling !== null) {
      if (node.nextSibling.nodeName === 'SMALL') {
        node.textContent = e.keyCode;
      }
    }
  });

  const code = document.querySelector('#code');

  code.childNodes.forEach((node) => {
    if (node.nodeName === '#text' && node.nextSibling !== null) {
      if (node.nextSibling.nodeName === 'SMALL') {
        node.textContent = e.code;
      }
    }
  });
};

input.addEventListener('keydown', keyInput);

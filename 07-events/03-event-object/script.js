const logo = document.querySelector('img');

// logo.addEventListener('click', function (e) {
//   console.log(e);
// });

function onClick(e) {
  // console.log(e.target);
  // console.log(e.currentTarget);
  // e.target.style.backgroundColor = 'black';

  console.log(e.type);
  console.log(e.timeStamp);
  console.log(e.clientX, e.clientY);
  console.log(e.offsetX, e.offsetY);
  console.log(e.pageX, e.pageY);
  console.log(e.screenX, e.screenY);
}

function onDrag(e) {
  document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
}

logo.addEventListener('click', onClick);

logo.addEventListener('drag', onDrag);

document.querySelector('a').addEventListener('click', function (e) {
  e.preventDefault();

  console.log('link was clicked');
});

// document.body.addEventListener('click', function (e) {
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

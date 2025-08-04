const logo = document.querySelector('img');

const onClick = () => console.log('Click Event');

// const onDblClick = () => console.log('Double Click Event');

const onDblClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

const onrightClick = () => console.log('right click event');

const onmouseDown = () => console.log('mouse down event');

const onmouseUp = () => console.log('mouse up event');

const onmouseWheel = () => console.log('mouse wheel event');

const onmouseOver = () => console.log('On mouse over event');

const onmouseOut = () => console.log('On mouse out event');

const ondragStart = () => console.log('On Drag Start Event');

const onDrag = () => console.log('On Drag');

const ondragEnd = () => console.log('on drag end');

// Event Listeners
logo.addEventListener('click', onClick);
logo.addEventListener('dblclick', onDblClick);
logo.addEventListener('contextmenu', onrightClick);
logo.addEventListener('mousedown', onmouseDown);
logo.addEventListener('mouseup', onmouseUp);
logo.addEventListener('wheel', onmouseWheel);
logo.addEventListener('mouseover', onmouseOver);
logo.addEventListener('mouseout', onmouseOut);
logo.addEventListener('dragstart', ondragStart);
logo.addEventListener('drag', onDrag);
logo.addEventListener('dragend', ondragEnd);

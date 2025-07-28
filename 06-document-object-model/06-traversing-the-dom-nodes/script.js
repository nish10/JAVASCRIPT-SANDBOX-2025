let output;

const parent = document.querySelector('.parent');

output = parent.childNodes;

output = parent.childNodes[0].textContent;

output = parent.childNodes[0].nodeName;

output = parent.childNodes[3].nodeName;

output = parent.childNodes[3].textContent;

output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].outerHTML;

output = parent.childNodes[3].innerHTML = 'Child One';

output = parent.childNodes[5].style.color = 'red';

output = parent.firstChild;

output = parent.lastChild;

parent.lastChild.textContent = 'Hello';

// Parent node

const child = document.querySelector('.child');

output = child.parentNode;

child.parentNode.style.backgroundColor = '#acc';

child.parentNode.style.padding = '10px';

// Siblings

const secondItem = document.querySelector('.child:nth-child(2');

output = secondItem.nextSibling;

output = secondItem.nextElementSibling;

output = secondItem.previousSibling;

console.log(output);

// const message = {
//   id: 1,
//   text: 'Hello World!!',
// };

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.substr(1))
    .join(' ');
}

function makeMoney(amt) {
  return `$${amt}`;
}

module.exports = {
  capitalizeWords,
  makeMoney,
};

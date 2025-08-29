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

export { capitalizeWords, makeMoney };

// export default capitalizeWords;

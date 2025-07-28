const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubledNumbers = numbers.map((number) => 'Number ' + number * 2);

console.log(doubledNumbers);

// For each

const sameDoubledNumbers = [];

numbers.forEach((number) => {
  sameDoubledNumbers.push(number * 2);
});

console.log(sameDoubledNumbers);

//

const companies = [
  {
    name: 'Company One',
    category: 'Finance',
    start: 1981,
    end: 2004,
  },
  {
    name: 'Company Two',
    category: 'Retail',
    start: 1982,
    end: 2008,
  },
  {
    name: 'Company Three',
    category: 'Auto',
    start: 1999,
    end: 2007,
  },
  {
    name: 'Company Four',
    category: 'Retail',
    start: 1989,
    end: 2010,
  },
  {
    name: 'Company Five',
    category: 'Technology',
    start: 2009,
    end: 2014,
  },
  {
    name: 'Company Six',
    category: 'Auto',
    start: 1986,
    end: 1996,
  },
];

// create an array of company names

const companyNames = companies.map((company) => company.name);

console.log(companyNames);

// create an array just have company and category

const companyCategory = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

console.log(companyCategory);

// Create an array of the lenght of each company in years

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + ' years',
  };
});

console.log(companyYears);

// Chain map methods
const squareAndDouble = numbers.map((number) => Math.sqrt(number)).map((sqrt) => sqrt * 2);

console.log(squareAndDouble);

const squareAndDouble2 = numbers
  .map(function (number) {
    return Math.sqrt(number);
  })
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtDoubled) {
    return sqrtDoubled * 3;
  });

console.log(squareAndDouble2);

// chaining different methods

const evenDouble = numbers.filter((number) => number % 2 === 0).map((number) => number * 2);

console.log(evenDouble);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// console.log(evenNumbers);

// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbers);

// Same with forEach
// let evenNumbers = [];

// numbers.forEach((number) => {
//   if (number % 2 === 0) {
//     evenNumbers.push(number);
//   }
// });

// console.log(evenNumbers);

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

// Get only retail companies

companiesRetail = companies.filter((company) => company.category === 'Retail');

console.log(companiesRetail);

// Get companies that started in or after 1980 and ended in or before 2005

const earlyCompanies = companies.filter((company) => company.start >= 1980 && company.end <= 2005);

console.log(earlyCompanies);

// Get companies that lasted 10 years or more

const longCompanies = companies.filter((company) => company.end - company.start >= 10);

console.log(longCompanies);

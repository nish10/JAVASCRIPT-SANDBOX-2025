const d = new Date(10, 30, 2025, 6, 0, 0);
const hour = d.getHours();

if (hour < 12) {
  console.log('Good Morning');
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
}

// Nested If

if (hour < 12) {
  console.log('Good Morning');
  if (hour === 6) {
    console.log('Wake Up!');
  }
} else if (hour < 18) {
  console.log('Good Afternoon');
} else {
  console.log('Good Night');
  if (hour >= 20) {
    console.log('zzzzzz');
  }
}

if (hour >= 7 && hour < 15) {
  console.log('it is work time');
}

if (hour === 6 || hour === 20) {
  console.log('Brush your teeth');
}

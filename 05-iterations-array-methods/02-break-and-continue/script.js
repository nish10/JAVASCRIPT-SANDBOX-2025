// Break

for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Breaking anything after 15....')
        break;
    }
    console.log(i);
}

// Continue

for (let i = 0; i <= 20; i++) {
    if (i === 15) {
        console.log('Skipping 15....')
        continue;
    }
    console.log(i);
}
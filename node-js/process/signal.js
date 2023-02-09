
process.on('SIGINT', () => {
    console.log(` try to exit using CTRL + C`);
});

process.on('SIGTSTP', () => {
    console.log(` try to exit using CTRL + Z`);
});

console.log('start');

setTimeout(() => {
    console.log('selesaii');
}, 20000)



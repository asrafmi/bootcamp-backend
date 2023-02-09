process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

process.on('beforeExit', (message) => {
    console.log(`before aplication exited with message: ${message}`);
});

process.on('uncaughtException', (message) => {
    console.log(`uncaughtException: ${message}`);
});

const a = undefined
console.log(a.name);

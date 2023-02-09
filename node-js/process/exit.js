process.on('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

process.on('beforeExit', (message) => {
    console.log(`before aplication exited with message: ${message}`);
});

process.on('uncaughtException', (message) => {
    console.log(`uncaughtException: ${message}`);
});

// try {
//     const a = undefined
//     console.log(a.name);
// } catch (error) {
//     console.log(error);
// }
const a = undefined
console.log(a.name);

// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     if (i == 80) {
//         console.log('aplikasi berhenti dengan damai');
//         process.exit(0)
//     }   
// }

const dotenv = require('dotenv')
dotenv.config()

console.log('process.version: ', process.version);
console.log('process.versions: ', process.versions);
console.log('process.release: ', process.release);
console.log('process.env.USERNAME: ', process.env.USERNAME);
console.log('process.env.PASSWORD: ', process.env.PASSWORD);
console.log('process.env.ENV_ASRAF: ', process.env.ENV_ASRAF);
process.env.ENV_ASRAF = "HAIIIII"
console.log('process.env.ENV_ASRAF: ', process.env.ENV_ASRAF);
console.log('process.env.argv: ', process.env.argv);
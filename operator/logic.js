a = true
b = false

if (a || b) {
    console.log('yey');
}

// Operator AND
console.log(`true and true = `, true && true);
console.log(`true and false = `, true && false);

console.log('---------------');

// Operator OR
console.log(`true and true = `, true || true);
console.log(`true and false = `, true || false);

console.log('---------------');

// Operator NOT
console.log(`!true = `, !true);
console.log(`!false = `,!false);

console.log('---------------');

// Operator Combine
console.log(`!false and true = `, !false && true);
console.log(`true and !false = `, true || !false);

console.log('---------------');

// Operator Complex
console.log(`!(false && true) || false = `, !(false && true) || false);
console.log(`true || (!false && false) = `, true || (!false && false));


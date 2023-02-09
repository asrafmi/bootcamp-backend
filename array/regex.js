let text = "Do you know if this is all there is?";
let pattern = /[is]/; 
let result = text.match(pattern);

console.log(result);

let text2 = "THIS This this";

let result1 = text2.match(/[THIS]/g);
let result2 = text2.match(/[THIS]/gi);

console.log(result1);
console.log(result2);

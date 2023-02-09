function isPrime(n) {
    if (n <= 1) return false;
    if (n <= 3) return true;
    if (n % 2 == 0 || n % 3 == 0) return false;
  
    let i = 5;
    while (i * i <= n) {
      if (n % i == 0 || n % (i + 2) == 0) return false;
      i += 6;
    }
    return true;
  }

console.log(isPrime(2)); 
console.log(isPrime(3)); 
console.log(isPrime(4)); 
console.log(isPrime(5)); 
console.log(isPrime(6)); 
console.log(isPrime(97)); 
console.log(isPrime(99)); 
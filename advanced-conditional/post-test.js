function palindrome(x) {
    let str = x.toString()
    result = str === str.split('').reverse().join('') ? `${str} merupakan palindrome` 
    : `${str} bukan merupakan palindrome`
    console.log(result);
}
// palindrome('asraf muhammad')
// palindrome('kasur rusak')
// palindrome('racecar')
// palindrome(12321)
// palindrome(12345)

function isPrimes(num) {
    let divider = 0
    for (let i = 1; i <= num; i++) {
        if (num % i == 0) {
            divider++
        }
    }
    result = divider == 2 ? `${num} merupakan bilangan prima`
    : `${num} bukan merupakan bilangan prima`        
    console.log(result);
}
isPrimes(5)
isPrimes(7)
isPrimes(4)
isPrimes(97)
isPrimes(99)
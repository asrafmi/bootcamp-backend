let n = 6;
// Pyramid
for (let i = 1; i <= n; i++) {
  let str = ''

  for (let j = 1; j <= n - i; j++) {
    str += ' '
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    str += '*'
  }

  for (let l = 1; l <= n - i; l++) {
      str += ' '
  }
  console.log(str);
}

// full stars row
for (let i = 0; i < 2; i++) {
    let str = ''
  
    for (let j = 1; j <= 11; j++) {
        str += '*'
    }
    console.log(str);
}

// 3 stars row
for (let i = 0; i < 3; i++) {
    let str = ''
  
    for (let j = 1; j <= 11; j++) {
        str += j == 5 || j == 6 || j == 7 ? '*' : ' '
    }
    
    console.log(str);
}



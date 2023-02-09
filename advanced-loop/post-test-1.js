let n = 6;
// Upside pyramid
for (let i = 1; i <= n; i++) {
  let str = ''

  for (let j = 1; j <= n - i; j++) {
    str += '-'
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    str += '*'
  }

  for (let l = 1; l <= n - i; l++) {
      str += '-'
  }
  console.log(str);
}

// Downside pyramid
for (let i = 5; i > 0; i--) {
    let str = ''
  
    for (let j = 1; j <= n - i; j++) {
        str += '-'
    }

    for (let k = 0; k < 2 * i - 1; k++) {
      str += '*'
    }

    for (let l = 1; l <= n - i; l++) {
        str += '-'
    }
    console.log(str);
}



let size = 5
for (let i = 0; i < size; i++) {
  let line = '';
  for (let j = 0; j < size * 2 - 1; j++) {
    if (i + j === size - 1 || j - i === size - 1) {
      line += '*';
    } else {
      line += '-';
    }
  }
  console.log(line);
}

  
  
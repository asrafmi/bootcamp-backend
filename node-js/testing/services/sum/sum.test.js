const sum = require('./sum')

test('1 tambah 1 sama dengan 2', () => {
    expect(sum(1,1)).toBe(2)
})
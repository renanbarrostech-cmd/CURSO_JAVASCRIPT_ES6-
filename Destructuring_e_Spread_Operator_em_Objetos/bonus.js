// const { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };

// console.log(a, b)
// console.log(rest)

const { a, b = 5 } = { a: 3, b: 4 };

console.log(b)

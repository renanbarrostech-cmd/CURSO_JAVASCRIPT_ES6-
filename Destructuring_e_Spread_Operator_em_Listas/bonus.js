const numeros2 = [1, 2, 3];

const numeroCom4e5 = [...numeros2, 4, 5]

// console.log(numeroCom4e5)

const [dez, vinte, ...resto] = [10, 20, 30, 40, 50]

console.log(dez, vinte)
console.log(resto)
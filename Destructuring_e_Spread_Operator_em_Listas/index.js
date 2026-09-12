const numeros = [1, 2, 3, 4];

// const primeiro = numeros[0]
// const segundo = numeros[1]
// const terceiro = numeros[2]
// const quarto = numeros[3]

const [primeiro, segundo, terceiro, quarto] = numeros;

console.log(primeiro, segundo, terceiro, quarto);

let x = 1;
let y = 3;

[x, y] = [y, x];

// funcionaria assim também: ([x, y] = [y, x])

console.log("x", x);
console.log("y", y);

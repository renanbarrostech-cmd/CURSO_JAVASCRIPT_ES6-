// Some

// const numeros = [2, 5, 8, 1, 4];

// const temNumeroMaiorDoQue10 = numeros.some((numero) => {
//   if (numero > 10) {
//     return true;
//   } else {
//     return false;
//   }
//   // return numero > 10;
// });

// console.log(temNumeroMaiorDoQue10)

const numeros = [1, 2, 3, 4, 5];

const todosSaoMaioresDoQue1 = numeros.every((item) => {
    if (item > 1) {
        return true
    } else {
        return false
    }
})

console.log(todosSaoMaioresDoQue1)
// 1. Crie uma lista que contenha apenas os valores que
// são maiores que 5 da lista "numeros".

const numeros = [3, 6, 8, 2];

const numerosMaioresDoQue5 = numeros.filter((numero) => {
  // if (numero > 5) {
  //     return true;
  // } else {
  //     return false;
  // }

  // Mesma coisa que acima.
  return numero > 5;
});

console.log(numerosMaioresDoQue5);

// 2. Crie uma lista que contenha apenas os valores pares
// da lista "numeros2".

const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numeros2Pares = numeros2.filter((numero) => {
  //   if (numero % 2 === 0) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // Mesma coisa que acima.
  return numero % 2 === 0;
});

console.log(numeros2Pares);

// 3. Crie uma lista que contenha apenas as pessoas que
// tem idade o suficiente pra fazer parte da Matrix (a idade
// minima é 18 anos), e logue-a no console.

const pessoas = [
  { nome: "Angelina Jolie", idade: 80 },
  { nome: "Eric Jones", idade: 12 },
  { nome: "Paris Hilton", idade: 9 },
  { nome: "Kayne West", idade: 30 },
  { nome: "Bob Ziroll", idade: 10 },
];

const pessoasMaiores = pessoas.filter((maiores) => {
  // if (maiores.idade >= 18) {
  //   return true;
  // } else {
  //     return false
  // }

  // Mesma coisa que acima.
  return maiores.idade >= 18;
});

console.log(pessoasMaiores);

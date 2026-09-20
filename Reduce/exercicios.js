// 1. Guarde em uma variavel a soma de todos os valores
// contidos na lista "numeros", e logue-a no console.

const numeros = [3, 4, 6, 8];

const somaDosNumeros = numeros.reduce((acc, atual) => {
  return acc + atual;
}, 0);

console.log(somaDosNumeros);

// 2. Guarde em uma variavel uma string que contenha todos
// os valores da lista "letras", e logue-as no console.

const letras = ["a", "b", "c", "d"];
// Exemplo: "abcd"

const letrasString = letras.reduce((acc, atual) => {
  return acc + atual;
}, "");

console.log(letrasString);

// 3. Guarde em uma variavel a soma das idades de todas as
// pessoas que votaram (votou = true), e logue-a no console.

const pessoas = [
  { nome: "Bob", idade: 30, votou: true },
  { nome: "Jake", idade: 32, votou: true },
  { nome: "Kate", idade: 25, votou: false },
  { nome: "Sam", idade: 20, votou: false },
  { nome: "Phil", idade: 21, votou: true },
  { nome: "Ed", idade: 55, votou: true },
  { nome: "Tami", idade: 54, votou: true },
  { nome: "Mary", idade: 31, votou: false },
  { nome: "Becky", idade: 43, votou: false },
  { nome: "Joey", idade: 41, votou: true },
  { nome: "Jeff", idade: 30, votou: true },
  { nome: "Zack", idade: 19, votou: false },
];

const somaIdadePessoasTrue = pessoas.reduce((acc, pessoa) => {
  //   if (pessoa.votou === true) {
  //     return acc + pessoa.idade;
  //   } else {
  //     return acc;
  //   }

  // mesma coisa que acima
  return pessoa.votou === true ? acc + pessoa.idade : acc;
}, 0);

console.log(somaIdadePessoasTrue);

// 4. Guarde em uma variavel a soma dos preços de todos os
// produtos na nossa lista de desejos, e logue-as no console.

const listaDeDesejos = [
  { titlo: "Tesla Model S", preco: 90000 },
  { titlo: "MacBook Pro", preco: 45000 },
  { titlo: "Outro Tesla Model S", preco: 5 },
  { titlo: "Carro de Fórmula 1", preco: 2000 },
  { titlo: "Outro Carro de Fórmula 1", preco: 90000 },
];

const somaPrecos = listaDeDesejos.reduce((acc, produto) => {
    return produto.preco + acc;
}, 0)

console.log(somaPrecos)
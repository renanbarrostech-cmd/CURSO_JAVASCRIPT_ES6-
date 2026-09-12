// 1. Assinale uma variavel pra cada valor na lista "numeros"
// utilizando Destructuring, e logue-as no console.

const numeros = [1, 2, 3, 4, 5];

const [primeiro, segundo, terceiro, quarto, quinto] = numeros;

console.log(primeiro);
console.log(segundo);
console.log(terceiro);
console.log(quarto);
console.log(quinto);

// 2. Inverta os valores das variaveis "a" e "b".
// Transforme o valor da variavel "a" no valor da variavel "b"
// E vice-versa, e logue-as no console.

let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a:", a, "b:", b);

[b, a] = [a, b];

console.log("a:", a, "b:", b);

// 3. Crie uma nova lista baseando-se na "melhoresSeriesDoMundo"
// Adicionando dois novos valores a ela utilizando o Spread Operator,
// E logue-as no console.

const melhoresSeriesDoMundo = ["GOT", "Breaking Bad", "Vikings"];

const doisNovosFilmes = [
  ...melhoresSeriesDoMundo,
  "The Last of Us",
  "Black Mirror",
];

console.log(doisNovosFilmes);

// 4. Assinale os dois primeiros valores da lista
// "sobremesas" a duas variaveis, e distribua o restante
// em apenas uma, utilizando o Spread Operator, e logue-as no console.

const sobremesas = [
  "Sorvete",
  "Petit Gateau",
  "Açai",
  "Pudim",
  "Mousse de limão",
];

const [sorvete, petitGateau, ...resto] = sobremesas;

console.log(sorvete, petitGateau, resto);

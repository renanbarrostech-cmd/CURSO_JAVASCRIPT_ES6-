// Ultilizando o .map, Crie uma lista que contenha
// todos os valores da lista "numeros" multiplacados por
// dois, e logue-as no console.

const numeros = [10, 20, 30, 40, 50];

numerosMultiplicadosPor2 = numeros.map((item) => {
  return item * 2;
});

console.log(numerosMultiplicadosPor2);

// 2. Crie uma lista, Usando o .map, baseando-se na lista
// "usuarios", que contenha a "idade" de cada usuario
// multiplicado por 2.

const usuarios = [
  { nome: "John", idade: 20 },
  { nome: "Jane", idade: 27 },
  { nome: "Doe", idade: 18 },
];

const usuariosComIdadeEmDobro = usuarios.map((item, index) => ({
  ...item,
  idade: item.idade * 2,
}));

console.log(usuariosComIdadeEmDobro);

// 3. Crie uma lista de strings, baseando-se na lista
// "pessoas", que diga se a pessoa pode ir ou não para a
// Matrix. Para ir, ela precisa de uma idade maior que 18.

const pessoas = [
  {
    nome: "Angelina Jolie",
    idade: 80,
  },
  {
    nome: "Eric Jones",
    idade: 2,
  },
  {
    nome: "Paris Hilton",
    idade: 16,
  },
  {
    nome: "Kayne West",
    idade: 16,
  },
  {
    nome: "Bob Zieroll",
    idade: 100,
  },
];

// Exemplo:
// ["Angelina Jolie pode ir para a Matrix!",
// "Eric Jones não tem a idade minima!"
// "Paris Hilton não tem a idade minima"
// "Kayne West não tem a idade minima"
// "Bob Ziroll pode ir para a Matrix!"]

const pessoasMatrix = pessoas.map((pessoa) => {
  if (pessoa.idade > 18) {
    return `${pessoa.nome} Pode ir para a Matrix!`;
  } else {
    return `${pessoa.nome} não pode ir para a Matrix!`;
  }
});

console.log(pessoasMatrix);

// 1. Acesse as propriedades
// "tamanhoDaBarba", "idade" e "familia" do objeto "viking"
// por meio do Destructuring e logue-as no console

const viking = {
  familia: "Lothbrok",
  tamanhoDaBarba: "enorme",
  idade: 30,
};

const { familia, tamanhoDaBarba, idade } = viking;

console.log(familia, tamanhoDaBarba, idade);

// 2. Acesse as propriedades "name" e "age" do objeto "usuario"
// por meio do Destructuring, renomeie-as para sua tradução em
// portugues, e logue-as no console.

const usuario = {
  name: "Renan Barros",
  age: 21,
};

const { name: nome, age: _idade } = usuario;

console.log(nome, _idade);

// 3. Acesse, utulizando o Destructuring, todas as propriedades
// dentro dos objetos "dadosPessoais" e "dadosProfissionais" do
// objeto "piloto", e logue-as no console.

const piloto = {
  dadosPessoais: {
    nome: "Ayrton Senna",
    idade: 34,
  },
  dadosProfissionais: {
    categoria: "Formula 1",
    conquistas: "É o melhor de todos os tempos.",
  },
};

const {
  dadosPessoais: { nome:_nome, idade:__idade },
  dadosProfissionais: { categoria, conquistas },
} = piloto;

console.log(_nome, __idade, categoria, conquistas);

// 4. Assinale as propriedades "a" e "b" do objeto abaixo
// A duas variaveis, E distribua as restantes em uma.

const obj = { a: 10, b: 20, c: 30, d: 40 };

const { a: dez, b: vinte, ...resto } = obj;

console.log(dez, vinte, resto);

// 1. Crie uma classe chamada "Guerreiro", que receba,
// em seu constuctor, um "nome" e uma "idade", e que
// contenha um metodo chamado "lutar" que logue uma
// mensagem dizendo "O guerreiro {nome}, de {idade} anos
// está lutando!"

class Guerreiro {
  constructor(nome, idade) {
    ((this.nome = nome), (this.idade = idade));
  }

  lutar() {
    console.log(
      `O guerreiro ${this.nome}, de ${this.idade} anos está lutando!`,
    );
  }
}

const guerreiro = new Guerreiro("Bjørn", 33);
guerreiro.lutar();

// 2. Crie uma classe chamada "Vikings", derivada da
// classe "Guerreiro" criada acima. Sobrescreva o metodo
// "lutar", que agora logará uma mensagem dizendo "O viking
//  {nome}, de {idade} anos está lutando em nome de Odin!"

// Crie também, na classe "Vikings" um metodo chamado
// "lutarComMartelo", que logue uma mensagem dizendo
// "O vinking {nome}, de {idade} anos está lutando com
// seu martelo no nome de thor!"

class Vikings extends Guerreiro {
  constructor(nome, idade) {
    super(nome, idade);
  }

  lutar() {
    console.log(
      `O Viking ${this.nome}, de ${this.idade} anos está lutando em nome de Odin!`,
    );
  }
  lutarComMartelo() {
    console.log(
      `O Viking ${this.nome}, de ${this.idade} anos está lutando com seu martelo no nome de thor!`,
    );
  }
}

const vikings = new Vikings("Torsten", 40);
const vikings2 = new Vikings("Ragnar", 35);
vikings.lutar();
vikings2.lutarComMartelo();

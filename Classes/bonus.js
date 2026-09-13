class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  falar() {
    console.log(`${this.nome} Fez algum barulho!`);
  }
}

class Cachorro extends Animal {
  constructor(nome) {
    super(nome);
  }

  falar() {
    console.log(`${this.nome} Latiu!`)
  }
  latir() {
    console.log(`${this.nome} Latiu novamente!`)
  }
}

const cachorro = new Cachorro("Simba");
cachorro.latir();

const animal = new Animal('Simba Animal');
animal.falar()

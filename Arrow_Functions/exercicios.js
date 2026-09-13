// 1. Converta as funções abaixo para Arrow Functions.

// Function
function somar(a, b) {
  return a + b;
}

// Arrow
const somarArrow = (a, b) => a + b;

// Function
function verificarNegativo(numero) {
  return numero < 0;
}

// Arrow
const verificarNegativoArrow = (numero) => numero < 0;

// Function
function criarUsuario(nome, idade) {
  return {
    nome,
    idade,
  };
}

// Arrow
const criarUsuarioArrow = (nome, idade) => ({
  nome,
  idade,
});

// Function
setTimeout(function () {
  console.log("Hello Word!");
}, 1000);

// Arrow
setTimeout(() => {
  console.log("Hello Word!");
}, 1000);

console.log(criarUsuarioArrow("Renan", 21));

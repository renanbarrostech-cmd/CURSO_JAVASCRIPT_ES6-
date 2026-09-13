function somar(a, b) {
  return a + b;
}

// const somarArrow = (a, b) => {
//     return a + b
// }

// mesma coisa que acima
const somarArrow = (a, b) => a + b;

console.log(somar(10, 5));
console.log(somarArrow(2, 2));


function verificarPositivo (numero) {
    return numero >= 0;
}

const verificarPositivoArrow = numero => numero >= 0

console.log(verificarPositivoArrow(2))

function retornaObjeto() {
    return {
        nome: 'Renan',
        sobreNome: 'Barros',
    }
}

const retornaObjetoArrow = () => ({
    nome: 'Renan',
    sobreNome: 'Barros',
})

console.log(retornaObjetoArrow())
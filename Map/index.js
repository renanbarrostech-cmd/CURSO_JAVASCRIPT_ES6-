const numeros = [1, 2, 3];

const numerosMultiplicadosPor2 = numeros.map((item, index) => {
  console.log(`index: ${index}, item: ${item}`);
  return item * 2;
});

console.log(numerosMultiplicadosPor2);

const usuarios = [
  {
    nome: "John",
    idade: 20,
  },
  {
    nome: "Doe",
    idade: 40,
  },
];

// const usuariosComIdadeMultiplicadaPor2 = usuarios.map(
//     (item, index) => {
//         return {...item, idade: item.idade * 2}
//     }
// )

const usuariosComIdadeMultiplicadaPor2 = usuarios.map((item, index) => ({
  ...item,
  idade: item.idade * 2,
}));

console.log(usuariosComIdadeMultiplicadaPor2);

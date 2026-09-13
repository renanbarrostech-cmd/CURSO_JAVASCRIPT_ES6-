// class Pessoa {
//   constructor(nome) {
//     this.nome = nome;
//   }

//   printNomeArrow() {
//     setTimeout(() => {
//       console.log(`Arrow ${this.nome}`);
//     }, 100);
//   }

//   printNomeFunction() {
//     setTimeout(function () {
//       console.log(`Function: ${this.nome}`);
//     });
//   }
// }

// const bob = new Pessoa("Bob")
// bob.printNomeArrow();
// bob.printNomeFunction();

// // const printThis = () => {
// //     console.log(this)
// // }

// // printThis()

// const object = {
//     message: 'Hello word',
//     printMessage() {
//         console.log(this.message)
//     }
// }

// const object = {
//     message: 'Hello word',
//     printMessage: function () {
//         console.log(this)
//     }
// }

const object = {
  message: "Hello word",
  printMessage: () => {
    console.log(this.message);
  },
};

object.printMessage();

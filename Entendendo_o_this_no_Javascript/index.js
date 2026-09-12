"use strict";

function printThis() {
  console.log(this);
}
printThis();

// "use strict" tira o padrão do this ser um objeto global
// se a função não pertencer a um objeto

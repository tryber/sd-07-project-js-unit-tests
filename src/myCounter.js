/* eslint-disable no-var */
/* eslint-disable block-scoped-var */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */

/*
  A função myCounter possui dois loops aninhados que inserem valores dentro de um array.
  Como podemos perceber, eles vão adicionando valores ao array até sua condição de parada.
  Corrija o código abaixo para que a função retorne o array correto.

  Parâmetros:
  - Nenhum.

  Comportamento:
  myCounter() // Retorna: [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
*/
var myArray = [];

function myCounter1() {
  for (let i = 2; i <= 2; i += 1) {
    myArray.push(i);
  }
  return myArray;
}

function myCounter2() {
  for (let j = 3; j <= 3; j += 1) {
    myArray.push(j);
  }
  return myArray;
}

const myCounter = () => {
  for (let i = 0; i <= 3; i += 1) {
    myArray.push(i);
    myCounter1();
    myCounter2();
  }
  return myArray;
};

module.exports = myCounter;

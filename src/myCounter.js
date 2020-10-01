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

const myCounter = () => {
  const myArray = [];
  for (let counter = 0; counter <= 3; counter += 1) {
    // primeiro loop pega o 0 e vai para o segundo onde é
    // adicionado o 2 e o 3 e depois retorna para o 1
    // o primeiro loop começa denovo so que agora do valor
    // de 1 e insere o 1 e vai para o segundo loop onde é inserido o 2 e o 3
    // o processo se repete ...
    // foi colocado o const porque o array tem que ser imutavel e o
    // o counter2 deve ser definido porque se não o counter vai
    // ficar com os valores inicias de 0 até 3 como uma variavel unica,
    myArray.push(counter);
    for (let counter2 = 2; counter2 <= 3; counter2 += 1) {
      myArray.push(counter2);
    }
  }
  return myArray;
};
module.exports = myCounter;

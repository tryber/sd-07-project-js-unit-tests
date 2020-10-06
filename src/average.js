/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// Criando uma variável global
// let result;

// Checando de o array é indefinido
// const verifyArray = (array) => {
//   if (array === undefined || array.length === 0) {
//     result = undefined;
//     return result;
//   }
// };

// const checkArrayItens = (array) => {
//   for (let index = 0; index <= array.length; index += 1) {
//     if (typeof array[index] !== "number") {
//       result = undefined;
//       break;
//     }
//   }
//   return result;
// };

const average = (array) => {
  let soma = 0;
  let media;
  for (index = 0; index < array.length; index += 1) {
    if (typeof array[index] === 'number') {
      soma += array[index];
      media = Math.round(soma / array.length);
    } else {
      media = undefined;
      break;
    }
  }
  return media;
};
// verifyArray(array);
// checkArrayItens(array);

//   let soma = 0;
//   let media;
//   for (let index = 0; index < array.length; index += 1) {
//     soma += array[index];
//   }
//   media = Math.round(soma / array.length);
//   result = media;
//   return result;
// };

console.log(average([]));
module.exports = average;

console.log(average([1, 2, 3, 4, 5]));

module.exports = average;

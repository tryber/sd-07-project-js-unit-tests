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

function arrayOfNumbers(array) {
  if (array.length === 0) return false;
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number' || isNaN(array[i]) || array.length === 0) {
      return false;
    }
  }
  return true;
}

const average = (array) => {
  // add your implementation here
  let sum = 0;
  if (arrayOfNumbers(array)) {
    for (let i = 0; i < array.length; i += 1) {
      sum += array[i];
    }
    return Math.round(sum / array.length);
  }
  return undefined;
};
console.log(average([3, 4, 5]));
console.log(average([1, 2, 3, '4', 5]));
console.log(average([0, 0, 0, 0, 0, 0, 0]));
console.log(average([1, 2, '3']));
console.log(average([1, 2, 3]));
console.log(average([0, 0, 0, 0, 0, 0, 1]));
console.log(average([]));
console.log(average([' ']));
console.log(average(['um', 'dois', 'tres']));
console.log(average([47, 63, 122]));
console.log(average([-11, 2, 5]));
console.log(average([-11, -5, 2]));

module.exports = average;

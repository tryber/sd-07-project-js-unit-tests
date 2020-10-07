/*
  A função average recebe um array (tamanho variável) e retorna a média dos valores recebidos.
  Caso a função receba algum valor não númerico ou um array vazio,
  o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 2]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

// add your implementation here

const average = (arrayNumber) => {
  let sum = 0;
  for (let index = 0; index < arrayNumber.length; index += 1) {
// adicionado uma condição para undefined
    if (typeof arrayNumber[index] !== 'number' || typeof arrayNumber[index] === 'string' || arrayNumber[index] === 0) {
      return undefined;
    }
    sum += arrayNumber[index];
  }

  const averageArray = Math.round(sum / arrayNumber.length);

  return averageArray;
};

module.exports = average;

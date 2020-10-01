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

const average = (sumArray) => {
  if (sumArray[0] === undefined) return undefined;
  let averageSum = 0;
  for (index = 0; index < sumArray.length; index += 1) {
    if (typeof sumArray[index] !== 'number') return undefined;
    averageSum += sumArray[index];
  }
  return Math.round(averageSum / sumArray.length);
};

module.exports = average;

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

const average = (arr) => {
  let sum = 0;

  // If para confirmar caso o array esteja vazio, retornar undefined.
  if (arr.length === 0) {
    return undefined;
  }

  // For para confirmar se caso for uma string/nao ser um numero, retornar undefined.
  for (let i = 0; i < arr.length; i += 1) {
    if (typeof arr[i] !== 'number') {
      return undefined;
    }
  }

  // For para somar o array
  for (let j = 0; j < arr.length; j += 1) {
    sum += arr[j];
  }
  // Função para arredondar o resultado da média dos valores recebidos.
  return Math.round(sum / arr.length);
};

module.exports = average;

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

const average = (array) => {
  let soma = 0;
  let resultado = 0;
  if (array.length === 0) {
    resultado = undefined;
    return resultado;
  }
  for (let i = 0; i < array.length; i += 1) {
    if (typeof array[i] !== 'number') {
      resultado = undefined;
      return resultado;
    }
    // console.log(array[i]);
    soma += array[i];
    // console.log(soma);
  }
  const media = soma / array.length;
  resultado = Math.round(media);
  // console.log(`o resultado final é ${resultado}`);
  return resultado;
};

module.exports = average;

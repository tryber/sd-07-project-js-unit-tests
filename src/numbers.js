/*
  A função numbers recebe um array (tamanho variável),
  retornando true se todos os parâmetros forem do tipo 'number' e false caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false
*/

const numbers = (myArray) => {
  const arrayReference = myArray;
  let bool = true;
  if (typeof myArray[0] !== 'number') return false;

  arrayReference.forEach((number) => {
    if (typeof number !== 'number') {
      bool = false;
    }
  });

  return bool;
};

console.log(numbers([]));

module.exports = numbers;

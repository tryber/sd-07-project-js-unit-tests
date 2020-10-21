/*
  Desenvolva um objeto calculator que possui quatro chaves:
    - add;
    - mult;
    - div;
    - sub.
  Para cada uma delas atribua uma função que realiza a respectiva operação.
  A função deve receber dois inteiros e retornar um inteiro.
  Os resultados das divisões devem sempre ser arredondados para baixo.

  Faça as funções com arrow functions!

  Parâmetros:
  - Um número inteiro;
  - Um número inteiro;

  Comportamento:
  calculator.add(1, 1) // Retorno: 2;
  calculator.div(3, 2) // Retorno: 1;
*/

const addNumber = (number1, number2) => {
  const sum = number1 + number2;
  return Math.floor(sum);
};

const multNumber = (number1, number2) => {
  const mult = number1 * number2;
  return Math.floor(mult);
};

const divNumber = (number1, number2) => {
  const div = number1 / number2;
  return Math.floor(div);
};

const subNumber = (number1, number2) => {
  const sub = number1 - number2;
  return Math.floor(sub);
};

const calculator = {
  add: addNumber,
  mult: multNumber,
  div: divNumber,
  sub: subNumber,
};

console.log(calculator.add(1, 1)); // Retorno: 2;
console.log(calculator.div(3, 2)); // Retorno: 1;
console.log(calculator.sub(1, 3));
module.exports = calculator;

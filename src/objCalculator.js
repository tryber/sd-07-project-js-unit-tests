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

const calculator = {
  add: (numb1, numb2) => numb1 + numb2,
  mult: (numb1, numb2) => numb1 * numb2,
  // Troquei o Parse ao ver esse Math;trunc do Matheus Beaumord
  div: (numb1, numb2) => Math.trunc(numb1 / numb2),
  sub: (numb1, numb2) => numb1 - numb2,
};

module.exports = calculator;

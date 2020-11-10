/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const assert = require('assert');
const circle = require('../src/circle');

/*
  Essa função recebe o raio de um círculo e retorna um objeto contendo suas informações (Raio, Área e Circunferência).
  Se não for especificado um raio, a função retorna undefined.
  Elabore testes para verificar se a função está correta.

  Parâmetros:
    - Um número inteiro. Exemplos: 1; 3;
  Comportamento:
    - circle(1) // Retorno: {radius: 1, area: 3.14, circumference: 6.28}
    - circle(7) // Retorno: {radius: 7, area: 153.86, circumference: 43.96}
    - circle(3) // Retorno: {radius: 3, area: 28,26, circumference: 18.84}

  DICA: Números de ponto flutuante em JavaScript são imprecisos!  Para testar, vá no seu navegador e faça `0.2 + 0.1`.
        Uma solução pra isso pode ser fazer a soma no seguinte formato: `parseFloat((0.2 + 0.1).toPrecision(2))`.
        Use esse conhecimento para te ajudar a lidar com possíveis problemas que esses testes trarão!

  OBS: Lembre-se que você não precisa se preocupar com o describe e o it por enquanto, isso será aprendido posteriormente.
*/

describe('#circle', () => {
  it('given a radius, should return an object with circles info', () => {
    //assert.fail();
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se circle retorna um objeto.
    let radius = 2;
    let result = typeof circle(radius);
    let expected = 'object';

    assert.strictEqual(
      result,
      expected,
      `Should return: ${expected}; Output: ${result}`,
    );

    // Teste se o objeto retornado tem 3 entradas.
    result = Object.keys(circle(radius)).length;
    expected = 3;

    assert.strictEqual(
      result,
      expected,
      `Should return: ${expected}; Output: ${result}`,
    );

    // Teste se a função, quando não recebe nenhum parâmetro, retorna undefined.
    result = circle();
    expected = undefined;

    assert.strictEqual(
      result,
      expected,
      `Should return: ${expected}; Output: ${result}`,
    );

    // Teste que a função retorna, dentro de um objeto, a circunferência correta para um círculo de raio 2.
    const PI = 3.14;
    result = circle(radius).circumference;
    expected = 2 * PI * radius;

    assert.strictEqual(
      result,
      expected,
      `Should return: ${expected}; Output: ${result}`,
    );

    // Teste que a função retorna, dentro de um objeto, a área correta para um círculo de raio 3.
    radius = 3;
    result = circle(radius).area;
    expected = PI * radius * radius;

    assert.strictEqual(
      result,
      expected,
      `Should return: ${expected}; Output: ${result}`,
    );

    // Teste que a função retorna, num objeto, os dados corretos de um círculo de raio 3.
    result = circle(radius);
    expected = {
      radius,
      area: PI * radius * radius,
      circumference: 2 * PI * radius,
    };

    assert.deepStrictEqual(
      result,
      expected,
      `Should return: ${expected}; Output: ${result}`
    );
  });
});

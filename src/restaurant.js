/* eslint-disable max-len */

/*
  Você é responsável por escrever o código do sistema de pedidos de um restaurante. Deve ser possível, através desse sistema, cadastrar um menu. Dado que um menu foi cadastrado, o sistema deve disponibilizar um objeto através do qual se consegue:
  - ler o menu cadastrado;
  - fazer pedidos;
  - verificar o que foi pedido;
  - somar o valor da conta.

  A estrutura deste código e deste objeto já foi definida e você irá implementá-la.
  Abaixo você verá uma série de testes e passos que devem ser, NECESSARIAMENTE, feitos em ordem para o bom desenvolvimento do sistema. Eles guiarão você pelo desenvolvimento.

  Parâmetros:
  - Um objeto. Exemplos: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }.
  Comportamento:

  const meuRestaurante = createMenu({ food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }).

  meuRestaurante.fetchMenu() // Retorno: { food: {'coxinha': 3.9, 'sopa': 9.9}, drink: {'agua': 3.9, 'cerveja': 6.9} }

  meuRestaurante.order('coxinha') // Retorno: undefined

  meuRestaurante.consumption // Retorno: ['coxinha']

  meuRestaurante.pay() // Retorno: 3.9

  Uma função createMenu retorna um objeto com as seguintes características:
  - Uma chave `fetchMenu` retorna o objeto que a função `createMenu` recebe por parâmetro. O menu tem sempre duas chaves, `food` e `drink`, no seguinte formato:

  const meuRestaurante = createMenu({
    food: {'coxinha': 3.90, 'sanduiche', 9.90},
    drinks: {'agua': 3.90, 'cerveja': 6.90}
  });

  meuRestaurante.fetchMenu() // Retorno: Menu acima

  - Uma chave `consumption` que contém um array de strings, com cada string sendo a chave de um pedido. Por exemplo: ['coxinha', 'cerveja']

  - Uma chave `order` que tem uma função que, recebida uma string como parâmetro, adiciona essa string à lista salva em `consumption`.

  - Uma chave `pay` que, quando chamada, invoca uma função que soma o valor de todos os pedidos e dá o preço com acréscimo de 10%.

  IMPORTANTE: COMECE PELO TESTE 1 DO ARQUIVO `tests/restaurant.spec.js` E NÃO PELO PASSO 1 DESTE ARQUIVO!
*/

// PASSO 1: Crie uma função `createMenu()` que, dado um objeto passado por parâmetro, retorna um objeto com o seguinte formato: { fetchMenu: objetoPassadoPorParametro }.
//
// Agora faça o TESTE 2 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 2: Adicione ao objeto retornado por `createMenu` uma chave `consumption` que, como valor inicial, tem um array vazio.
//
// Agora faça o TESTE 5 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 3: Crie uma função, separada da função `createMenu()`, que, dada uma string recebida por parâmetro, adiciona essa string ao array de `objetoRetornado.consumption`. Adicione essa função à chave `order`.
// DICA: para criar isso, você vai precisar definir a função `createMenu()`, definir o objeto que a `createMenu()` define separadamente dela e, depois, a função que será definida em `order`.
// ```
// const restaurant = {}

//
// const createMenu = (myMenu) => // Lógica que edita o objeto `restaurant`
//
// const orderFromMenu = (request) => // Lógica que adiciona à chave `consumption` de `restaurant` a string recebida no parâmetro `request`. Essa função deve ser associada à chave `order` de `restaurant`
// ```
// Agora faça o TESTE 6 no arquivo `tests/restaurant.spec.js`.

//------------------------------------------------------------------------------------------

// PASSO 4: Adicione ao objeto retornado por `createMenu()` uma chave `pay` com uma função que varre todo os itens de `objetoRetornado.consumption`, soma o preço de todos checando-os no menu e retorna o valor somado acrescido de 10%. DICA: para isso, você precisará varrer tanto o objeto da chave `food` quanto o objeto da chave `drink`.

let sum = 0;
const objRetorno = {};
const inputConsumption = (str) => {
  objRetorno.consumption.push(str);
};
const payFunction = (item) => {
  const food = (objRetorno.fetchMenu.food);
// cria uma constante com o objeto que e proprieda de {obj}...( food:  {*} )
  const drink = (objRetorno.fetchMenu.drink);
// cria uma constante com o objeto que e proprieda de {obj}...( drink:  {*} )
  const total = Object.assign({}, food, drink);
// Object.assign cria  um objeto retornado que copia
// os valores de todas as propriedades dos objetos parametro de obj
// (food e drink) ;  // (food {*} + drink {*} = {**} )
  for (let i = 0; i < (Object.keys(total).length); i += 1) {
// Object.keys retorna um array cujos elementos são strings que representam
// os itens do menu. ex: ( ['coxinha', 'agua', 'coxinha'])
// ( todo objeto e um conjunto de parametros que sao constituidos de chaves, e valores. nesse caso,
// chave e o item, como coxinha e agua,  e valor e o valor de compra de cada um deles.)
// o laço varrerá todo esse array.
    if (item === Object.keys(total)[i]) {
      sum += Object.values(total)[i];
// para cada item adicionado como parametro da funçao  que for estritamente
// igual a esses elementos (strings do menu) , sera adicionado a soma o valor
// correspondente a cada um deles..
    }
  }
  return sum;
};
const createMenu = (obj) => {
  objRetorno.fetchMenu = obj;
  objRetorno.consumption = [];
  objRetorno.order = (inputConsumption);
  objRetorno.pay = () => {
    const orderConsumption = objRetorno.consumption;
    orderConsumption.forEach(payFunction);
// Para cada  item pedido(cada elemento do array objRetorno.consumption),
// sera realizada a funçao callback payFunction,
// passando o item como parametro.
    return ((sum * 1.1).toFixed(2)) * 1;
  };
  return objRetorno;
};

// referência par ao projeto do Adrian
// https://github.com/tryber/sd-07-project-js-unit-tests/pull/148/files

module.exports = createMenu;

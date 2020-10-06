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
//------------------------------------------------------------------------------------------
// Essa sessão comentada contém duas funções que criei em minhas primeiras tentativas de solucionar o passo 4 desse arquivo.
// Apesar de elas não terem funcionado como esperado, resolvi que as deixaria aqui como conteúdo extra.
// const priceToPay = (itens) => {
//   let sum = 0;
//   for (let index = 0; index < itens.length; index += 1) {
//     if (toBePaid === itens[index]) {
//       sum += restaurant.fetchMenu[itens][index];
//     }
//   }
//   return sum;
// }
// const getPayment = () => {
//   let sum = 0;
//   const toBePaid = restaurant.consumption;
//   const food = Object.keys(restaurant.fetchMenu.food);
//   const drink = Object.keys(restaurant.fetchMenu.drink);
//   const section = Object.keys(restaurant.fetchMenu);
//   const itens = food.concat(drink);
//   for (let item = 0; item < itens.length; item += 1) {
//     if (toBePaid === itens[item]) {
//       sum += restaurant.fetchMenu[section][itens][item];
//     }
//   }
//   const tip = sum * 0.1;
//   return (parseFloat((sum + tip).toFixed(2)));
// };
//------------------------------------------------------------------------------------------
const myMenu = {
  food: { coxinha: 3.9, sopa: 9.9 },
  drink: { agua: 3.9, cerveja: 6.9 },
};
let restaurant = {};

const getPayment = () => {
  let sum = 0;
  const itensToBePaid = restaurant.consumption;
  const priceItens = Object.values(restaurant.fetchMenu);
  itensToBePaid.forEach((item) => {
    priceItens.forEach((price) => {
      if (price[item] !== undefined) {
        sum += price[item];
      }
    });
  });
  const tip = sum * 0.1;
  return sum + tip;
};

const createMenu = () => {
  restaurant = {
    fetchMenu: myMenu,
    consumption: [],
    order: request => restaurant.consumption.push(request),
    pay: getPayment,
  };
  return (restaurant);
};

module.exports = createMenu;

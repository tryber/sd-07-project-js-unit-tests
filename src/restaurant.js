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


// toda função pay foi inspirada e adaptada a partir duma
// discussão do slack, que surgiu de Jéssica de Paula,
// mas houveram  modificações,afim de adaptar para o formato
// de criação de objeto, e da função definida,
// além de  correções para verificar quaisquer
// valores (Uso de toFixed() e Multiply by one)

// referencia para objetos sao? :
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Trabalhando_com_Objetos
// referencia para forEach:
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// referência para toFixed():
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
// referência para multiply by one:
// https://stackabuse.com/javascript-convert-string-to-number/
// referência para Object.assign():
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// referência para Object.keys():
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// referência para Object.values():
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// referência  para o trabalho de Paula:
// https://github.com/tryber/sd-07-project-js-unit-tests/pull/31

module.exports = createMenu;

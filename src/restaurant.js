const sumOfItemsSupport = (item, arrayOfPrices) => {
  let sum = 0;
  for (let index = 0; index < arrayOfPrices.length; index += 1) {
    if (item === arrayOfPrices[index][0]) {
      sum += arrayOfPrices[index][1];
    }
  }
  return sum;
};
const sumOfItems = (arrayOfConsumption, arrayOfPrices) => {
  let sum = 0;
  const tip = 0.1;
  for (let index = 0; index < arrayOfConsumption.length; index += 1) {
    sum += sumOfItemsSupport(arrayOfConsumption[index], arrayOfPrices);
  }
  return sum * (1 + tip);
};
const createMenu = (objeto) => {
  const newMenu = {
    fetchMenu: objeto,
    consumption: [],
    order: (request) => {
      newMenu.consumption.push(request);
    },
    pay: () => {
      let sumOfAll = 0;
      const itemsConsumed = newMenu.consumption;
      const foodEntries = Object.entries(newMenu.fetchMenu.food);
      const drinkEntries = Object.entries(newMenu.fetchMenu.drink);
      sumOfAll = sumOfItems(itemsConsumed, foodEntries) + sumOfItems(itemsConsumed, drinkEntries);
      return parseFloat(sumOfAll).toPrecision(4);
    },
  };
  return newMenu;
};
module.exports = createMenu;
// Referência de bibliográfica:
// https://github.com/tryber/sd-07-project-js-unit-tests/commit/68be2a9dc064c63fb8962c0dd1de10777f650877

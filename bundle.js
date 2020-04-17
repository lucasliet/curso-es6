"use strict";

var arr = [1, 9, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return {
    valor: item,
    posicao: index
  };
});
console.log(newArr);
var somarTodosItens = arr.reduce(function (total, next) {
  return total + next;
});
console.log(somarTodosItens);
var pares = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(pares);
var encontrar = arr.find(function (item) {
  return item === 9;
});
console.log(encontrar);

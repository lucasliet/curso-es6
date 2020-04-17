"use strict";

var arr = [1, 3, 4, 5, 8, 9];
var newArr = arr.map(function (item, index) {
  return {
    valor: item,
    posicao: index
  };
});
console.log(newArr);

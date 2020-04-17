"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function soma() {
  for (var _len = arguments.length, numero = new Array(_len), _key = 0; _key < _len; _key++) {
    numero[_key] = arguments[_key];
  }

  return numero.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 2, 3, 4, 5, 6));
var user = {
  nome: 'Lucas',
  idade: 25,
  endereco: {
    rua: 'dos Bobos',
    numero: 0
  }
};

var nome = user.nome,
    resto = _objectWithoutProperties(user, ["nome"]);

console.log(nome);
console.log(resto);
var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c);

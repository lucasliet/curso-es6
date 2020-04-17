"use strict";

var user = {
  nome: 'Lucas',
  idade: 25,
  endereco: {
    rua: 'dos Bobos',
    numero: 0
  }
}; // console.log(user.nome);
// console.log(user.idade);
// console.log(user.endereco.rua);
// const { nome, idade, endereco, endereco: { rua, numero } } = user;

function dados(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      endereco = _ref.endereco,
      _ref$endereco = _ref.endereco,
      rua = _ref$endereco.rua,
      numero = _ref$endereco.numero;
  console.log(nome);
  console.log(idade);
  console.log(endereco);
  console.log(rua);
  console.log(numero);
}

dados(user);

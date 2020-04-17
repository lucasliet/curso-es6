const user = {
    nome: 'Lucas',
    idade: 25,
    endereco:{
        rua: 'dos Bobos',
        numero: 0,
    },
};

// console.log(user.nome);
// console.log(user.idade);
// console.log(user.endereco.rua);

// const { nome, idade, endereco, endereco: { rua, numero } } = user;

function dados({nome, idade, endereco, endereco: {rua, numero}}){
    console.log(nome);
    console.log(idade);
    console.log(endereco);
    console.log(rua);
    console.log(numero);   
}

dados(user);
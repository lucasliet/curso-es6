function soma(...numero){
    return numero.reduce((total, next) => total + next);
}

console.log(soma(1,2,3,4,5,6));


const user = {
    nome: 'Lucas',
    idade: 25,
    endereco:{
        rua: 'dos Bobos',
        numero: 0,
    },
};

const { nome, ...resto } = user;

console.log(nome);
console.log(resto);

const arr = [ 1, 2, 3, 4 ];

const [ a, b, ...c ] = arr;

console.log(a);
console.log(b);
console.log(c);
const arr = [ 1, 9, 3, 4, 5, 8, 9 ];

const newArr = arr.map((item, index) => {
    return { valor:item, posicao:index };
});

console.log(newArr);

const somarTodosItens = arr.reduce((total, next) => total + next);

console.log(somarTodosItens);

const pares = arr.filter(item => item % 2 === 0);

console.log(pares);

const encontrar = arr.find(item => item === 9);

console.log(encontrar);
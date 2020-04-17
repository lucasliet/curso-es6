const arr = [ 1, 3, 4, 5, 8, 9 ];

const newArr = arr.map(function(item, index){
    return { valor:item, posicao:index};
});

console.log(newArr);

const somarTodosItens = arr.reduce(function(total, next){
    return total + next;
})

console.log(somarTodosItens);

const pares = arr.filter(function(item){
    return item % 2 === 0; //condição do item a ser retornado
})

console.log(pares);
function soma(a = 3, b = 4){
    return a + b;
};

console.log(soma(1));
console.log(soma());

const somaArrow = (a = 3, b = 4) => a + b;

console.log(somaArrow(1));
console.log(somaArrow());
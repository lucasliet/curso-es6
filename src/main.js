//Axios
import axios from 'axios';

class Api {
    static async getUserInfo(username){
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);            
            console.log(response);
        } catch (error) {
            console.warn('Erro na API');
        }
    }
}

Api.getUserInfo('lucasliet');

// //async await
// const minhaPromise = () => new Promise((resolve, reject) => {
//     setTimeout(() => { resolve('OK') }, 2000);    
// });

// async function executaPromise(){
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
//     console.log(await minhaPromise());
// };
 
// executaPromise();

// // Object Short Syntax
// const nome = 'Lucas';
// const idade = '25';

// const usuario = {
//     nome,
//     idade,
//     faculdade: 'São Judas',
// };

// console.log(usuario);

// //Spread
// const arr1 = [ 1, 2, 3 ];
// const arr2 = [ 5, 6, 7 ];

// const uniao = [ ...arr1, ...arr2 ];

// console.log(uniao);

// const user1 = {
//     nome: 'Lucas',
//     faculdade: 'São Judas',
//     equipe: 'DreamTeam',
// };

// const user2 = {
//     ...user1,
//     nome: 'Leonardo',
// };

// console.log(user1, user2)

// //Rest
// function soma(...numero){
//     return numero.reduce((total, next) => total + next);
// }

// console.log(soma(1,2,3,4,5,6));


// const user = {
//     nome: 'Lucas',
//     idade: 25,
//     endereco:{
//         rua: 'dos Bobos',
//         numero: 0,
//     },
// };

// const { nome, ...resto } = user;

// console.log(nome);
// console.log(resto);

// const arr = [ 1, 2, 3, 4 ];

// const [ a, b, ...c ] = arr;

// console.log(a);
// console.log(b);
// console.log(c);

// //Destructuring
// const user = {
//     nome: 'Lucas',
//     idade: 25,
//     endereco:{
//         rua: 'dos Bobos',
//         numero: 0,
//     },
// };

// // console.log(user.nome);
// // console.log(user.idade);
// // console.log(user.endereco.rua);

// // const { nome, idade, endereco, endereco: { rua, numero } } = user;

// function dados({nome, idade, endereco, endereco: {rua, numero}}){
//     console.log(nome);
//     console.log(idade);
//     console.log(endereco);
//     console.log(rua);
//     console.log(numero);   
// }

// dados(user);

// //Default values to functions
// function soma(a = 3, b = 4){
//     return a + b;
// };

// console.log(soma(1));
// console.log(soma());

// const somaArrow = (a = 3, b = 4) => a + b;

// console.log(somaArrow(1));
// console.log(somaArrow());

// //ARROW FUNCTION
// const arr = [ 1, 9, 3, 4, 5, 8, 9 ];

// //  const newArr = arr.map(function(item, index){
// //      return { valor:item, posicao:index};
// //  });
//  const newArr = arr.map((item, index) => ({ valor:item, posicao:index }));

//  console.log(newArr);

// //  const somarTodosItens = arr.reduce(function(total, next){
// //      return total + next;
// //  });
//  const somarTodosItens = arr.reduce((total, next) => total + next);

//  console.log(somarTodosItens);

// //  const pares = arr.filter(function(item){
// //      return item % 2 === 0; //condição do item a ser retornado
// //  });
//  const pares = arr.filter(item => item % 2 === 0);

//  console.log(pares);

// //  const encontrar = arr.find(function(item){
// //      return item === 9; //retorna '9' se ele existir no array
// //  });
//  const encontrar = arr.find(item => item === 9);

//  console.log(encontrar);

// //Find
// const arr = [ 1, 9, 3, 4, 5, 8, 9 ];

// const newArr = arr.map(function(item, index){
//     return { valor:item, posicao:index};
// });

// console.log(newArr);

// const somarTodosItens = arr.reduce(function(total, next){
//     return total + next;
// });

// console.log(somarTodosItens);

// const pares = arr.filter(function(item){
//     return item % 2 === 0; //condição do item a ser retornado
// });

// console.log(pares);

// const encontrar = arr.find(function(item){
//     return item === 9; //retorna '9' se ele existir no array
// });

// console.log(encontrar);

// //Filter / achar pares
// const arr = [ 1, 3, 4, 5, 8, 9 ];

// const newArr = arr.map(function(item, index){
//     return { valor:item, posicao:index};
// });

// console.log(newArr);

// const somarTodosItens = arr.reduce(function(total, next){
//     return total + next;
// })

// console.log(somarTodosItens);

// const pares = arr.filter(function(item){
//     return item % 2 === 0; //condição do item a ser retornado
// })

// console.log(pares);

// //TotalSum / Reduce
// const arr = [ 1, 3, 4, 5, 8, 9 ];

// const newArr = arr.map(function(item, index){
//     return { valor:item, posicao:index};
// });

// console.log(newArr);

// const somarTodosItens = arr.reduce(function(total, next){
//     return total + next;
// })

// console.log(somarTodosItens);

// //Map
// const arr = [ 1, 3, 4, 5, 8, 9 ];

// const newArr = arr.map(function(item, index){
//     return { valor:item, posicao:index};
// });

// console.log(newArr);

// //const Mutation
// const usuario = { nome: "Lucas" };

// usuario.nome = "Robertinho"; //apesar de usuario ser const, posso mutar um atributo dele
// console.log(usuario);


// //Static
// class TodoList {
//     constructor(){
//         this.todos = [];
//     }

//     static addTodo() { //static não pode puxar o o todo porque static só enxerga a proria função
//         this.todos.push('Novo Todo');
//         console.log(todos);
//     }
// }

// TodoList.addTodo();

// class Matematica {
//     static soma(a,b) {
//         return a + b;  //static pode ser usado quando o retorno é um método simples, como uma conta de parametros recebidos
//     }
// }
// console.log(Matematica.soma(1,2));

// //Herança
// class List{
//     constructor(){
//         this.data = [];
//     }

//     add(data){
//         this.data.push(data);
//         console.log(this.data);
//     }
// }

// class TodoList extends List{
//     constructor(){
//         super();
//         this.usuario = 'Lucas';
//     }

//     mostraUsuario() {
//         console.log(this.usuario);
//     }
    
// }

// var MinhaLista = new TodoList();

// document.getElementById('novotodo').onclick = function() {
//     MinhaLista.add('novo todo');
// }

// MinhaLista.mostraUsuario();
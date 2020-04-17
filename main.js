const arr1 = [ 1, 2, 3 ];
const arr2 = [ 5, 6, 7 ];

const uniao = [ ...arr1, ...arr2 ];

console.log(uniao);

const user1 = {
    nome: 'Lucas',
    faculdade: 'São Judas',
    equipe: 'DreamTeam',
};

const user2 = {
    ...user1,
    nome: 'Leonardo',
};

console.log(user1, user2)
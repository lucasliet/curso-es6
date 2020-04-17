class TodoList {
    constructor(){
        this.todos = [];
    }

    static addTodo() { //static não pode puxar o o todo porque static só enxerga a proria função
        this.todos.push('Novo Todo');
        console.log(todos);
    }
}

TodoList.addTodo(); //
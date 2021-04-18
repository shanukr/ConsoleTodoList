"use-strict"

let todoList = []

class Todo {
    constructor(id, title, completed, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.completed = completed;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    showTodo() {
        console.log(`-----------------------`)
        console.log(`TODO ${this.id}: ${this.title}`)
        this.completed === true ? console.log("Completed") : console.log(`Incomplete`);
        console.log(`Created on ${this.createdAt}`)
        if (this.updatedAt != null) {
            console.log(`updated on ${this.updatedAt}`)
        }
        console.log(`-----------------------`)
    }
}

let date = () => {
    let date = new Date();
    return date.getDate() + `-` + date.getMonth() + `-` + date.getFullYear()
}

let addTodo = (title) => {
    todoList.push(new Todo(todoList.length + 1, title, false, date(), null));
    return `${title} added`
};

let editTodo = (id, newTitle) => {
    todoList[id - 1].title = newTitle; todoList[id - 1].updatedAt = date()
    return `todo ${id} modified to ${newTitle}`;
};

let completeTodo = (id) => {
    todoList[id - 1] != undefined ? todoList[id - 1].completed = true : console.log(`No todo with id ${id}`)
};

let completeAll = () => {
    todoList.forEach(todo => { todo.completed = true })
    return `All todos completed`;
};

let deleteTodo = (id) => {
    todoList[id - 1] != undefined ? delete todoList[id - 1] : console.log(`No Todo with id: ${this.id}`)
};

let clearCompleted = () => {
    todoList.forEach(todo => todo.completed = false)
    return `All Todos cleared`;
};

let getActiveTodoCount = () => {
    let arr = todoList.filter(todo => todo.completed === true);
    return arr.length;
};

let viewTodos = (flag) => {
    switch (flag) {
        case 'ALL': todoList.forEach(todo => todo.showTodo()); break;
        case 'COMPLETE': todoList.forEach(todo => { if (todo.completed === true) todo.showTodo(); }); break;
        case 'ACTIVE': todoList.forEach(todo => { if (todo.completed === false) todo.showTodo(); }); break;
        default: console.log("INVALID FLAG!!")
    }
};





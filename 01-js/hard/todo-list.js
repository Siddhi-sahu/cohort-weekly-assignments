/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.listOfTodo = [];
  }

  add(todo) {
    this.listOfTodo.push(todo);
    // return this.listOfTodo;
  }
  remove(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo > this.listOfTodo.length - 1) {
      return "invalid index: enter an index that exists";
    }
    this.listOfTodo.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (index < 0 || index > this.listOfTodo.length - 1) {
      // throw new Error("invalid index: enter an index that exists");
      return "invalid index: enter an index that exists";
    }

    this.listOfTodo[index] = updatedTodo;
  }
  getAll() {
    return this.listOfTodo;
  }
  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo > this.listOfTodo.length - 1) {
      return null;
    }
    return this.listOfTodo[indexOfTodo];
  }
  clear() {
    this.listOfTodo = [];
  }
}

module.exports = Todo;

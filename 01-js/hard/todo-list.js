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
  constructor(){
    this.listOfToDos = []
  }

  add(toDoText){
    this.listOfToDos.push(toDoText);
    return this.listOfToDos;
  }

  remove(toDoIndex){
    if (toDoIndex > -1) { 
      this.listOfToDos.splice(toDoIndex, 1);
      return this.listOfToDos;
    }
  }

  update(toDoIndex, toDoText){
    this.listOfToDos[toDoIndex] = toDoText;
    return this.listOfToDos;
  }

  getAll(){
    return this.listOfToDos;
  }

  get(toDoIndex){
    return this.listOfToDos[toDoIndex]
  }

  clear(){
    this.listOfToDos = [];
    return this.listOfToDos;
  }
}

//module.exports = Todo;
const todoList = new Todo()
todoList.add('Task 1');
todoList.add('Task 2');
todoList.add('Task 3');

todoList.update(1, 'Updated Task 2');
console.log(todoList.get(1))
todoList.update(3, 'Invalid Task')
console.log(todoList.getAll())

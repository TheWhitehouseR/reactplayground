import todos from './todos';

//console.log(`todos.createTodo is ${JSON.stringify(todos.createTodo, null, 2)}`);
//console.log(`todos is ${JSON.stringify(todos, null, 2)}`);

export default {
  createTodo: todos.createTodo,
  createTodos: todos.createTodos,
}
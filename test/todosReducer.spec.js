import todosReducer from '../src/reducers/todos';
import { createTodo, updateTodo, deleteTodo, toggleTodo, } from '../src/actions/todos';
//import assert from 'assert';

it('adds one todo item', () => {
  const todo = {
    task: 'My test task',
  };

  const nextState = todosReducer(undefined, createTodo(todo));

  expect(nextState.todos[0].task).to.equal('My test task');
  expect(nextState.todos.length).to.equal(1);
});

it('initializes state to empty array', () => {
  const nextState = todosReducer(undefined, { type: undefined, });

  expect(nextState.todos.length).to.equal(0);
});

it('returns original state', () => {
  const originalState = {
    todos: [{
      task: 'My test task',
    }, 
      {
        task: 'My other test task',
      },
    ],
  };

  const nextState = todosReducer(originalState, { type: undefined, });

  expect(nextState).to.equal(originalState);
});

it('updates one todo item', () => {
  const updateTodoModel = {
    oldTask: 'My test task',
    newTask: 'My updated test task',
  };

  const originalState = {
    todos: [{
      task: 'My test task',
    }, 
      {
        task: 'My other test task',
      },
    ],
  };

  const nextState = todosReducer(originalState, updateTodo(updateTodoModel));

  // console.log(`nextState is ${JSON.stringify(nextState, null, 2)}`);

  expect(nextState.todos[0].task).to.equal('My updated test task');
  expect(nextState.todos[1].task).to.equal('My other test task');
  expect(nextState.todos.length).to.equal(2);
});

it('deletes one todo item', () => {
  const taskToDelete = { task: 'My test task', };

  const originalState = {
    todos: [{
      task: 'My test task',
    }, 
      {
        task: 'My other test task',
      },
    ],
  };

  const nextState = todosReducer(originalState, deleteTodo(taskToDelete));

  // console.log(`nextState is ${JSON.stringify(nextState, null, 2)}`);

  expect(nextState.todos.length).to.equal(1);
  expect(nextState.todos[0].task).to.equal('My other test task');
});

it('toggles one non completed todo item', () => {
  const taskToToggle = { task: 'My test task', };

  const originalState = {
    todos: [{
      task: 'My test task',
      completed: false,
    }, 
      {
        task: 'My other test task',
        completed: false,
      },
    ],
  };

  const nextState = todosReducer(originalState, toggleTodo(taskToToggle));

  // console.log(`nextState is ${JSON.stringify(nextState, null, 2)}`);

  expect(nextState.todos.length).to.equal(2);
  expect(nextState.todos[0].task).to.equal('My test task');
  expect(nextState.todos[0].completed).to.equal(true);
  expect(nextState.todos[1].task).to.equal('My other test task');
  expect(nextState.todos[1].completed).to.equal(false);
});

it('toggles one completed todo item', () => {
  const taskToToggle = { task: 'My test task', };

  const originalState = {
    todos: [{
      task: 'My test task',
      completed: true,
    }, 
      {
        task: 'My other test task',
        completed: true,
      },
    ],
  };

  const nextState = todosReducer(originalState, toggleTodo(taskToToggle));

  // console.log(`nextState is ${JSON.stringify(nextState, null, 2)}`);

  expect(nextState.todos.length).to.equal(2);
  expect(nextState.todos[0].task).to.equal('My test task');
  expect(nextState.todos[0].completed).to.equal(false);
  expect(nextState.todos[1].task).to.equal('My other test task');
  expect(nextState.todos[1].completed).to.equal(true);
});

  



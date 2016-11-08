import * as actionTypes from '../constants/actionTypes';

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.CREATE_TODO:
    return createTodo(state, action);
  case actionTypes.TOGGLE_TODO:
    return toggleTodo(state, action);
  case actionTypes.UPDATE_TODO:
    return updateTodo(state, action);
  case actionTypes.DELETE_TODO:
    return deleteTodo(state, action);
  }
  return state;
};

function createTodo(state, action) {
  const { todo, } = action;

  const newState = Object.assign({}, state, {
    todos: [
      ...state.todos,
      todo,
    ],
  });  

  return newState
}

function updateTodo(state, action) {
  const { updateTodoModel, } = action;
  
  const todos = state.todos.map(x => {
    return (x.task === updateTodoModel.oldTask) ? 
      { task: updateTodoModel.newTask, } : x;
  });
  
  return { ...state, todos: todos, };
}

/*

saveTask(oldTask, newTask) {
        const existingTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        existingTodo.task = newTask;
        this.setState({ todos: this.state.todos })
    }

    */

function toggleTodo(state, action) {
  const { todo, } = action;
  
  const todos = state.todos.map(x => {
    if (x.task === todo.task)
    {
      x.completed = !x.completed;
    }
    return x;
  });
 
  return { ...state, todos: todos, };
}

function deleteTodo(state, action) {
  const { todo, } = action;
  
  const todos = state.todos.filter(x => x.task !== todo.task);
  
  return { ...state, todos: todos, };
}

/*
  console.log(`state is ${JSON.stringify(state, null, 2)}`);
  console.log(`action is ${JSON.stringify(action, null, 2)}`);
  console.log(`todo is ${JSON.stringify(todo, null, 2)}`);
*/


  /*
  createTask(task) {
        this.state.todos.push({
            task,
            isCompleted: false,
        });
        this.setState({ todos: this.state.todos })
    }
  */
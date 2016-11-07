import * as actionTypes from '../constants/actionTypes';

export function createTodo (todo) {
    return {
      type: actionTypes.CREATE_TODO,
      todo
    };
}

export function deleteTodo (todo) {
    return {
      type: actionTypes.DELETE_TODO,
      todo
    };
  }


/*export function createTodos (todos) {
    return {
      type: actionTypes.CREATE_TODOS,
      todos
    };
};
*/

export function updateTodo (updateTodoModel) {
    return {
      type: actionTypes.UPDATE_TODO,
      updateTodoModel,
      
      /*updateTodoModel: {
        oldTask: 'My test task',
        newTask: 'My updated test task',
      } */
    };
};

export function toggleTodo (todo) {
    return {
      type: actionTypes.TOGGLE_TODO,
      todo,
      
      /*updateTodoModel: {
        oldTask: 'My test task',
        newTask: 'My updated test task',
      } */
    };
};

/*
  

  deleteTodo: (todo) => {
    return {
      type: actionTypes.DELETE_TODO,
      todo
    };
  },

  editTodo: (todo) => {
    return {
      type: actionTypes.EDIT_TODO,
      todo
    };
  },

  deleteAllCompletedTodos: () => {
    return {
      type: actionTypes.DELETE_ALL_COMPLETED_TODOS
    };
  },
}
*/
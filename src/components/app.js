import React from 'react';
import TodosList from './todos-list';
import CreateTodo from './create-todo';
import _ from 'lodash';
//import { Provider, } from 'react-redux';
import configureStore from '../stores/configureStore';
import actions from '../actions/index';

const todos = [
  {
    task: 'make React tutorial',
    isCompleted: false,
  },
  {
    task: 'eat dinner',
    isCompleted: true,
  },
];

console.log(`actions is ${JSON.stringify(actions, null, 2)}`);

const store = configureStore();
store.dispatch(actions.createTodos(todos));

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos,
    }
  }

  createTask(task) {
    this.state.todos.push({
      task,
      isCompleted: false,
    });
    this.setState({ todos: this.state.todos, })
  }

  toggleTask(task) {
    const existingTask = _.find(this.state.todos, todo => todo.task === task);
    existingTask.isCompleted = !existingTask.isCompleted;
    this.setState({ todos: this.state.todos, })
  }

  saveTask(oldTask, newTask) {
    const existingTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    existingTodo.task = newTask;
    this.setState({ todos: this.state.todos, })
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.todos, todo => todo.task === taskToDelete);
    this.setState({ todos: this.state.todos, })
  }
    
  removeCompleted() {
    const completedTasks = _.filter(this.state.todos, (taskItem) => taskItem.isCompleted);
    if (completedTasks && completedTasks.length > 0)
        {
      completedTasks.forEach((taskItem) => this.deleteTask(taskItem.task));
    }
    else {
      console.log('No tasks to delete');
    }
  }

  render() {
    return (
        <div>
            <h1>React Todos App</h1>
            <CreateTodo createTask={this.createTask.bind(this)} todos={this.state.todos} />
            <TodosList todos={this.state.todos} 
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
            removeCompleted={this.removeCompleted.bind(this)}/>
        </div>
        );
  }
}

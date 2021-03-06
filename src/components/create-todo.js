import React from 'react';

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    }
  }
    
  renderError() {
    if (! this.state.error) { return null; }

    return (<div style={{color: 'red', }}>{this.state.error}</div>)
  }
    
  render() {
    return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="What do I need to do?" ref="createInput" />
                <button>Create</button>
                {this.renderError()}
            </form>
        );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const isInvalidInput = this.validateInput(task);

    if (isInvalidInput) {
      this.setState({ error: isInvalidInput, });
      return;
    }

    this.setState({ error: null, });
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  validateInput(task) {   
    if (!task) {
      return 'Please enter a task.';
    }
    if (this.props.todos.find(todo => todo.task === task)) {
      return 'Task already exists.';
    }

    return null;
  }
}

CreateTodo.propTypes = {
  todos: React.PropTypes.array.isRequired,
  createTask: React.PropTypes.func.isRequired,
}

export default CreateTodo;
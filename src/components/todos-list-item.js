import React from 'react';

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    }
  }

  renderTaskSection() {
    const { task, isCompleted, } = this.props;
        
    const taskStyle = {
      color: isCompleted ? 'green' : 'black',
      cursor: 'pointer',
      textDecoration: isCompleted ? 'line-through': 'none',
    }

    if (this.state.isEditing) {
      return (
                <td style={taskStyle}
                    onClick={this.props.toggleTask.bind(this, task)}>
                    <form onSubmit={this.onSaveClick.bind(this)}>
                        <input type="text" defaultValue={task} ref="editInput" />
                    </form>
                </td>
            );
    }

    return (
            <td style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}>
                {task}
            </td>
        );
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
                <td>
                    <button onClick={this.onSaveClick.bind(this)}>Save</button>
                    <button onClick={this.onCancelClick.bind(this)}>Cancel</button>
                </td>
            );
    }
    return (
            <td>
                <button onClick={this.onEditClick.bind(this)}>Edit</button>
                <button onClick={this.onDeleteClick.bind(this)}>Delete</button>
            </td>
        );
  }
        
  render() {
    return (
            <tr>
                {this.renderTaskSection()}
                {this.renderActionSection()}   
            </tr>
        );
  }

  onDeleteClick() {
    this.props.deleteTask(this.props.task);
  }

  onEditClick() {
    this.setState({ isEditing: true, });
  }

  onCancelClick() {
    this.setState({ isEditing: false, });
  }

  onSaveClick(event) {
    event.preventDefault();
        
    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;

    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false, });
  }
}

TodosListItem.propTypes = {
  saveTask: React.propTypes.func.isRequired,
  task: React.propTypes.object.isRequired,
  deleteTask: React.propTypes.func.isRequired,
  toggleTask: React.propTypes.func.isRequired,
  isCompleted: React.propTypes.bool,
}

export default TodosListItem;
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item';
import _ from 'lodash';

export default class TodosList extends React.Component {    
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => 
            <TodosListItem key={index} {...todo} {...props}/>);
    }
   
    render() {
        //console.log(this.props);

        return (
            <div>
                <table>
                    <TodosListHeader />
                    <tbody>
                        {this.renderItems()}
                    </tbody>
                </table>
                <button onClick={this.props.removeCompleted.bind(this)}>Remove completed</button>
            </div>
        );
    }
}

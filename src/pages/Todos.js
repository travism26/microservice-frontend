import React, { Component } from 'react';
import Todo from '../components/Todo';
import * as TodoActions from '../actions/TodoActions';
import TodoStore from '../store/TodoStore';


export default class Todos extends React.Component {

	constructor() {
		super();
		this.state = {
			todos: TodoStore.getAll(),
		};
	}

	componentWillMount(){
		//this will add event listeners
		TodoStore.on("change", () =>{
			this.setState({
				todos: TodoStore.getAll(),
			});
		});
	}

	reloadTodos(){
		TodoActions.reloadTodos();
	}

	render() {
		const { todos } = this.state;

		const TodoComponents = todos.map((todo) =>{
			return <Todo Key={todo.id} {...todo}/>
			});

		return (
			<div>
				<button onClick={this.reloadTodos.bind(this)}>Reload!</button>
				<h1>Todos</h1>
				<ul>{ TodoComponents }</ul>
			</div>
		);
	}
}


import React, { Component } from 'react';
import Todo from '../components/Todo';

export default class Todos extends React.Component {

	constructor() {
		super();
		this.state = {
			todos: [
			{
				id: 113123123,
				text: "do something cool",
				complete: false
			},
			{
				id: 1337,
				text: "hello world",
				complete: false
			}]
		};
	}


	render() {
		const { todos } = this.state;

		const TodoComponents = todos.map((todo) =>{
			return <Todo Key={todo.id} {...todo}/>
			});

		return (
			<div>
				<h1>Todos</h1>
				<ul>{ TodoComponents }</ul>
			</div>
		);
	}
}


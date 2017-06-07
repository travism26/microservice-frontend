import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class TodoStore extends EventEmitter {
	constructor() {
		super()
		this.todos= [
			{
				id: 113123123,
				text: "do something else",
				complete: false
			},
			{
				id: 1337,
				text: "prob with the family back east",
				complete: false
			},
		];
	}

	createTodo(text) {
		const id = Date.now();

		this.todos.push({
			id,
			text,
			complete: false,
		});

		this.emit("change");
	}

	getAll(){
		return this.todos;
	}

	handleActions(action){
		console.log("TodoStore received an action", action);
		
		/* I hate switchs this generally means you can use polymorphism
		 * to make the dispatcher more adapt to change instead of "hard coding"
		 * all your switchs statements here...still learning TO BE FIXED!
		 */
		switch(action.type) {
			case "CREATE_TODO": {
				this.createTodo(action.text);
			}
			case "RECEIVE_TODOS": {
				//this.receiveTodos(action.text);
				this.todos = action.todos;
				this.emit("change");
			}
		}
	}
}


const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));
//expose the todoStore globally through the console
window.dispatcher = dispatcher;
window.todoStore = todoStore;
export default todoStore;
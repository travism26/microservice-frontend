import dispatcher from "../dispatcher";

export function createTodo(text){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		text,
	});
}


export function deleteTodo(id){
	dispatcher.dispatch({
		type: "CREATE_TODO",
		id,
	});
}

export function reloadTodos(){
	// axios("http://someurl.com/somedata").then((date) => {
	// 	console.log("got the data!", data);
	// });
	dispatcher.dispatch({ type: "FETCH_TODOS"});
	setTimeout(() => {
		dispatcher.dispatch({ type: "RECEIVE_TODOS", todos: [
			{
				id: 89128321,
				text: "this is a loaded todo",
				complete: false
			},
			{
				id: 123123123,
				text: "loaded info two",
				complete: true
			},
		]});

		if(false) {
			dispatcher.dispatch({ type: "FETCH_TODOS_ERROR" });
		}
	}, 1000);
}
import { createStore } from "redux";

const reducer = function(state, action){

	/*
	 * There must be a way to used objects and fire off the commands / actions based off the object
	 * example: action.type.fire() or something like that. avoid a shit ton of if else if statements!!!
	 */
	if (action.type === "INC") {
		return state+action.payload;
	}
	else if (action.type === "DEC") {
		return state-action.payload;
	}
	return state;
}

const store = createStore(reducer, 0);


store.subscribe(() => {
	console.log("Store Changed", store.getState())
});

store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "INC", payload: 1});
store.dispatch({type: "DEC", payload: 5});
//console.log(store);
import { createStore } from "redux";

const reducer = function(state, action){
	if (action.type === "INC") {
		return state+1;
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
//console.log(store);
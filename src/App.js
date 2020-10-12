import React from "react";
import "./App.css";
import Todo from "./containor/toDos";
import TodoList from "./containor/TodoList";
import { createStore } from "redux";
import reducer from "./Store/reducer";
import { Provider } from "react-redux";
function App() {
	const store = createStore(reducer);
	return (
		<Provider store={store}>
			<div className="App">
				<Todo />
			
			</div>
		</Provider>
	);
}

export default App;

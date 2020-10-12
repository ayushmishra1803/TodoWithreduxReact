const initalState = {
    todo: ["Ayush" ,"Mishra","angular","react"],
    ayush:"123456",
    admin:true,
    user:true
};

const reducer = (state = initalState, action) => {
	if ((action.type = "add")) {
	
		let newTodo = [];
		newTodo = state.todo;
        newTodo.push(action.value);
        console.log(newTodo);
		
		return {
			...state,
			todo: newTodo,
		};
	} else {
		return state;
	}
};
export default reducer;

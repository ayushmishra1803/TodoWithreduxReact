export const ADD = "add";

export const actionCreator = (value) => {
	if (value === undefined) {
		value = "Ayush";
	}
	return {
		type: ADD,
		value: value,
	};
};

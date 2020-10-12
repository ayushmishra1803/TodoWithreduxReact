import React, { Component } from "react";
import { connect } from "react-redux";
import * as action from "../Store/action";
import TodoList from "./TodoList";
class ToDos extends Component {
	toDoIteam;
	onChnageInputHandler(event) {
		this.toDoIteam = event.target.value;
	}
	onTODOD() {
		this.props.add(this.toDoIteam);
	}
	render() {
		let show;

		return (
			<div>
				{this.props.admin ? (
					<input
						type="text"
						value={this.toDoIteam}
						onChange={(event) => this.onChnageInputHandler(event)}
					/>
				) : null}
				{this.props.user ? (
					<button onClick={() => this.onTODOD()}>Add</button>
				) : null}
				<TodoList  user={this.props.user}/>
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		user: state.user,
		admin: state.admin,
	};
};
const mapDispatchtoProps = (dispatch) => {
	return {
		add: (value) => dispatch(action.actionCreator(value)),
	};
};
export default connect(mapStateToProps, mapDispatchtoProps)(ToDos);

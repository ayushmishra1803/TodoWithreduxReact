import React, { Component } from "react";
import { connect } from "react-redux";
class TodoList extends React.Component {
	render() {
		console.log(this.props.user);
		return (
			<div>
				{this.props.todo.map((re) => {
					return re;
				})}
			</div>
		);
	}
}
const mapStateToProps = (state) => {
	return {
		todo: state.todo,
	};
};
export default connect(mapStateToProps)(TodoList);

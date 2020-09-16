import React from "react";
import moment from "moment";

const TodoList = ({ todos, deleteTodo, ToggleComplete, loading }) => {
	// console.log(todos[0].isCompleted , "from todoList")
	// const getStyle = () => {
	// 	return {
	// 		className: todos.isCompleted ? "line-through" : "none",
	// 	};
	// };

	// console.log()

	let TodoList = todos.length ? (
		todos.map((todo) => {
			return (
				<li
					style={{
						textDecoration: todo.isCompleted
							? "line-through"
							: "none",
					}}
					className="list-group-item title"
					key={todo._id}
				>
					<input
						type="checkbox"
						className="checkbox"
						defaultChecked={todo.isCompleted}
						onChange={() => ToggleComplete(todo._id)}
					/>
					{todo.todo}
					<span
						className="delete"
						onClick={() => deleteTodo(todo._id)}
					>
						{" "}
						&times;{" "}
					</span>
					<span className="date">
						{" "}
						Created@{" "}
						{moment(todo.createdAt).format(
							"MMMM Do YYYY, h:mm:ss a"
						)}{" "}
					</span>
				</li>
			);
		})
	) : (
		<p className="no-todo"> no todos left </p>
	);
	return (
		<div>
			<ul className="list-group">{TodoList}</ul>
		</div>
	);
};

export default TodoList;

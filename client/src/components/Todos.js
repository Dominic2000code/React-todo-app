import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Header from "./Header";
import TodoForm from "./TodoForm";

const Todos = () => {
	const [todos, setTodos] = useState([]);
	// const [loading, setLoading] = useState(false);
	// console.log(todos, "from todos.js")
	useEffect(() => {
		// const getItem = async () => {
		// 	const rawData = await fetch("/api/todos");
		// 	const data = await rawData.json();
		// 	// console.log(data)
		// 	setTodos(data);
		// };
		// getItem();

		fetch("api/todos")
			.then((res) => res.json())
			.then((data) => setTodos(data));
	}, [todos]);

	const ToggleComplete = (id) => {
		// console.log(id);
		// setTodos(
		// 	todos.map((todo) => {
		// 		if (todo._id === id) {
		// 			todo.isCompleted = !todo.isCompleted;
		// 			// console.log(todo.isCompleted);
		// 		}
		// 		return todo;
		// 	})
		// );
		todos.map((todo) => {
			if (todo._id === id) {
				todo.isCompleted = !todo.isCompleted;
				// console.log(todo.isCompleted);
				fetch(`api/todos/${id}`, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({
						isCompleted: todo.isCompleted,
					}),
				}).then((res) => res.json());
			}
			return todo
		});
	};

	const deleteTodo = (id) => {
		// setTodos(todos.filter((todo) => todo.id !== id));
		fetch(`api/todos/${id}`, {
			method: "DELETE",
		});
	};

	const addTodo = (todo) => {
		// setTodos([
		// 	...todos,
		// 	{
		// 		todo: title,
		// 		id: Math.random(),
		// 		isCompleted: false,
		// 	},
		// ]);
		fetch("api/todos", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				todo: todo,
			}),
		}).then((res) => res.json());
	};

	return (
		<div className="todo-list">
			<Header todos={todos} />
			<TodoList
				todos={todos}
				deleteTodo={deleteTodo}
				ToggleComplete={ToggleComplete}
			/>
			<TodoForm addTodo={addTodo} />
		</div>
	);
};
export default Todos;

// { id: Math.random(), todo: "buy water", isCompleted: false, createdAt:"June 18th 2020, 5:39 pm" },
// { id: Math.random(), todo: "buy food", isCompleted: false, createdAt:"June 18th 2020, 5:39 pm" },
// { id: Math.random(), todo: "debug code", isCompleted: false, createdAt:"June 18th 2020, 5:39 pm" },

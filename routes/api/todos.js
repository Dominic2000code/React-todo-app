const express = require("express");
const router = express.Router();

// Todo Model
const Todo = require("../../models/Todos");

// Get route | This fetches the todos in the database
router.get("/", async (req, res) => {
	todos = await Todo.find();
	res.json(todos);
});

// Post route | This Creates or Puts data into the database
router.post("/", async (req, res) => {
	const { todo } = req.body;
	try {
		const newTodo = new Todo({ todo });
		const todos = await newTodo.save();
		res.json(todos);
	} catch (error) {
		res.json(error);
	}
	// const newTodo = new Todo({ todo: req.body.todo });
	// newTodo.save().then((todo) => res.json(todo))
	// .catch((err)=>res.json(err))
});

// Delete route | This deletes a single item from database
router.delete("/:id", async (req, res) => {
	const { id } = req.params;
	try {
		const todo = await Todo.findById(id);
		todo.remove();
		res.json({ success: true });
	} catch (error) {
		res.status(404).json(error);
	}
});

// Put route | This updates data in the database
router.put("/:id", (req, res) => {
	const { id } = req.params;
	// const { isCompleted } = req.body;
	// console.log(id, isCompleted )
	Todo.findByIdAndUpdate({ _id: id }, req.body).then(() => {
		Todo.findOne({ _id: id }).then((todo) => {
			res.json(todo);
			// console.log(todo)
		});
	});
});

module.exports = router;

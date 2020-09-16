const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const TodoSchema = new Schema({
	todo: {
		type: String,
		required: true,
	},
	isCompleted: {
		type: Boolean,
		default: false,
	}
}, {timestamps: true});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;

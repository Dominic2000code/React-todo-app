const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const Todos = require("./routes/api/todos");

const app = express();

// Body-parser Middleware
// app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const dbConfig = require("./config/keys").mongoURI;

// DB Connection
mongoose
	.connect(dbConfig, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => {
		console.log("MongoDB Connected...");
	})
	.catch((error) => {
		console.log("Error connecting", error);
	});

// Use Routes/api
app.use("/api/todos", Todos);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
	// Set static folder
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

import React from "react";
import Todos from "./components/Todos";
import Navbar from "./components/NavBar";
// import { BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<>
			<div>
				<Navbar />
			</div>
			<div className="App">
				<Todos />
			</div>
		</>
	);
}

export default App;

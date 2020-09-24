import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<span href="#" className="logo">
				SidCorp
			</span>
			<ul className="nav ">
				<li>
					<a
						href="https://github.com/Dominic2000code/React-todo-app"
						target="_blank"
						rel="noopener noreferrer"
						className="github"
					>
						GitHub
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;

import React from 'react';

const Header = ({todos}) => {
    return ( 
        <div className="header" >
            <h1>Todo App</h1>
            <p>You currently have {todos.length} todos left...</p>
        </div>
    );
}

export default Header;
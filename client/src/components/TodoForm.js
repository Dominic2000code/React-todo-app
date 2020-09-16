import React, {useState} from 'react';

const TodoForm = ({addTodo}) => {
    const [title, setTitle] = useState("");

    const AddTodo = (e) => {
        e.preventDefault();
        addTodo(title)
        // console.log(title, author)
        setTitle("");
    };
    return ( 
        <div>
            <form onSubmit={AddTodo}>
                <input
                    type="text"
                    placeholder="What do you need to do?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <input type="submit" value="Add Todo" />
            </form>
        </div>
    );
}
export default TodoForm;
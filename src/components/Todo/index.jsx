import STodo from "components/Todo/styles";

const Todo = ({ theTodo }) => {
    return (
        <STodo>
            <div className="todo-top">
                <p className="todo-title">Title: {theTodo.title}</p>
                <p className="todo-subtitle">Creator: {theTodo.userId}</p>
                <p className="todo-status">Status: {+theTodo.completed}</p>
            </div>
            <div className="todo-bottom">
                <p className="todo-description">Description: {theTodo.title}</p>
            </div>
        </STodo>
    );
};

export default Todo;

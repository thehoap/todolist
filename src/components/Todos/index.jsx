import Todo from "components/Todo";
import STodos from "components/Todos/styles";
import { useLocation } from "react-router-dom";
import { useGetTodosQuery } from "services/todoApi";

const Todos = () => {
    const location = useLocation();
    const status = location.pathname.substring(1);

    const {
        data: todos,
        isLoading,
        isSuccess,
        isError,
    } = useGetTodosQuery({ status });

    return (
        <STodos>
            {isSuccess &&
                todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </STodos>
    );
};

export default Todos;

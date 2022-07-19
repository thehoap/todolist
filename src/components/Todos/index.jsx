import Todo from "components/Todo";
import STodos from "components/Todos/styles";
import { useGetTodosQuery } from "services/todoApi";

const Todos = () => {
    const { data: todos, isLoading, isSuccess, isError } = useGetTodosQuery();

  return (
        <STodos>
            {isSuccess && todos.map((todo) => (
                <Todo key={todo.id} theTodo={todo} />
            ))}
        </STodos>
    );
};

export default Todos;

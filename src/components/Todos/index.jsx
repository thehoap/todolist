import { SkeletonTodo } from "components/Skeleton";
import Todo from "components/Todo";
import STodos from "components/Todos/styles";
import { ITEMS_PER_PAGE } from "constants/pagination";
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
            {isLoading &&
                Array(ITEMS_PER_PAGE)
                    .fill(0)
                    .map((skeletonTodo, index) => <SkeletonTodo key={index} />)}
            {isSuccess &&
                todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
        </STodos>
    );
};

export default Todos;

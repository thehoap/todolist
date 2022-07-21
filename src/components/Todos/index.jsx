import { SkeletonTodo } from "components/Skeleton";
import Todo from "components/Todo";
import STodos from "components/Todos/styles";
import { ITEMS_PER_PAGE } from "constants/pagination";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLazyGetTodosQuery } from "services/todoApi";

const Todos = () => {
    const location = useLocation();
    const status = location.pathname.substring(1);

    const [getTodos, { isLoading, isSuccess, isError, data: todos }] =
        useLazyGetTodosQuery();

    useEffect(() => {
        getTodos({ status });
    }, [status]);

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

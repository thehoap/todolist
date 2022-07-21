import { SkeletonTodo } from "components/Skeleton";
import Todo from "components/Todo";
import STodos from "components/Todos/styles";
import { ITEMS_PER_PAGE } from "constants/pagination";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import todosSlice from "redux/slices/todosSlice";
import store from "redux/store";
import { useLazyGetTodosQuery } from "services/todoApi";

const Todos = () => {
    const location = useLocation();
    const status = location.pathname.substring(1);
    let searchText = store.getState().filter;
    
    const [getTodos, { isLoading, isSuccess, isError, data: todos }] =
    useLazyGetTodosQuery();
    useEffect(() => {
        getTodos({ status, searchText });
    }, [status, searchText]);  

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(todosSlice.actions.setTodos(todos));
    }, [isSuccess]);

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

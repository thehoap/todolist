import { Pagination } from "antd";
import { SkeletonTodo } from "components/Skeleton";
import Todo from "components/Todo";
import STodos from "components/Todos/styles";
import { ITEMS_PER_PAGE } from "constants/pagination";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import todosSlice from "redux/slices/todosSlice";
import { useLazyGetTodosQuery } from "services/todoApi";

const Todos = () => {
    const location = useLocation();
    const status = location.pathname.substring(1);
    const searchText = useSelector((state) => state.filter.search);

    const [getTodos, { isLoading, isSuccess, isError, data: todos }] =
        useLazyGetTodosQuery();
    const [getAllTodos, { isSuccess: isAllSuccess, data: allTodos }] =
        useLazyGetTodosQuery();

    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        getAllTodos({ status, title_like: searchText });
        setCurrentPage(1);
    }, [status, searchText]);
    useEffect(() => {
        getTodos({
            _page: currentPage,
            _limit: ITEMS_PER_PAGE,
            status,
            title_like: searchText,
        });
    }, [currentPage, status, searchText]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(todosSlice.actions.setTodos(todos));
    }, [isSuccess]);

    return (
        <>
            <STodos>
                {isLoading &&
                    Array(ITEMS_PER_PAGE)
                        .fill(0)
                        .map((skeletonTodo, index) => (
                            <SkeletonTodo key={index} />
                        ))}
                {isSuccess &&
                    todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
            </STodos>
            {isSuccess && (
                <Pagination
                    defaultCurrent={1}
                    current={currentPage}
                    onChange={(page) => {
                        setCurrentPage(page);
                    }}
                    pageSize={ITEMS_PER_PAGE}
                    total={isAllSuccess && allTodos.length}
                    className="pagination"
                />
            )}
        </>
    );
};

export default Todos;

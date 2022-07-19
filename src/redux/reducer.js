import todosSlice from "redux/slices/todosSlice";
import { todoApi } from "services/todoApi";

const rootReducer = {
    [todoApi.reducerPath]: todoApi.reducer,
    todos: todosSlice.reducer,
};

export default rootReducer;

import { combineReducers } from "redux";
import todosSlice from "redux/slices/todosSlice";
import { todoApi } from "services/todoApi";

const rootReducer = combineReducers({
    [todoApi.reducerPath]: todoApi.reducer,
    todos: todosSlice.reducer,
});

export default rootReducer;

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { todoApi } from "services/todoApi";
import filterSlice from "./slices/filterSlice";
import todosSlice from "./slices/todosSlice";

const store = configureStore({
    reducer: {
        [todoApi.reducerPath]: todoApi.reducer,
        todos: todosSlice.reducer,
        filter: filterSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(todoApi.middleware),
});

setupListeners(store.dispatch);

export default store;

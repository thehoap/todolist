import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        setTodos: (state, action) => {
            return action.payload;
        },
    },
});

export default todosSlice;

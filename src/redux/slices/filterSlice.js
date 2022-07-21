import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: "filter",
    initialState: {
        search: "",
    },
    reducers: {
        searchText: (state, action) => {
            state.search = action.payload;
        },
    },
});

export default filterSlice;

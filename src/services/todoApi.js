import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "todoApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getAllTodos: builder.query({
            query: () => ({
                url: "/todos",
            }),
            providesTags: ["Todos"],
        }),
        getTodos: builder.query({
            query: ({ status }) => ({
                url: "/todos",
                params: status && { status },
            }),
            providesTags: ["Todos"],
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: "/todos",
                method: "POST",
                body: todo,
            }),
            invalidatesTags: ["Todos"],
        }),
        updateTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos/${todo.id}`,
                method: "PUT",
                body: todo,
            }),
            invalidatesTags: ["Todos"],
        }),
        deleteTodo: builder.mutation({
            query: ({ id }) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
        }),
    }),
});

export const {
    useGetAllTodosQuery,
    useGetTodosQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todoApi;

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: ({ status, searchText }) => {
                console.log(searchText);
                return {
                    url: "/todos",
                    params: `?${status && `status=${status}`}&${
                        searchText &&
                        `title_like=${searchText}&creator_like=${searchText}`
                    }`,
                };
            },
            transformResponse: (result) => result.sort((a, b) => b.id - a.id),
            providesTags: ["Todos"],
        }),
        getTodo: builder.query({
            query: (id) => ({
                url: `/todos?id=${id}`,
            }),
            providesTags: ["Todos"],
        }),
        addTodo: builder.mutation({
            query: (todo) => {
                console.log(todo);
                return {
                    url: "/todos",
                    method: "POST",
                    body: todo,
                };
            },
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
            query: (id) => ({
                url: `/todos/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Todos"],
        }),
    }),
});

export const {
    useLazyGetTodosQuery,
    useLazyGetTodoQuery,
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todoApi;

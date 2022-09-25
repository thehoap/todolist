import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3004/" }),
    tagTypes: ["Todos"],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: (params) => {
                if (!params.status) {
                    const { status, ...newParams } = params;
                    return {
                        url: "/todos",
                        params: newParams,
                    };
                }
                return {
                    url: "/todos",
                    params,
                };
            },
            // transformResponse: (result) => result.sort((a, b) => b.id - a.id),
            providesTags: ["Todos"],
        }),
        getTodo: builder.query({
            query: (id) => ({
                url: `/todos?id=${id}`,
            }),
            transformResponse: (result) => result.sort((a, b) => b.id - a.id),
            providesTags: ["Todos"],
        }),
        addTodo: builder.mutation({
            query: (todo) => {
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
<<<<<<< HEAD
    useGetTodosQuery,
=======
    useLazyGetTodosQuery,
    useLazyGetTodoQuery,
>>>>>>> d3a62dbba3089a44f7c2f0ac1e34aad2be28eaab
    useAddTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation,
} = todoApi;

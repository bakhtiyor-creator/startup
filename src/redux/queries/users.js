import createQuery from "../../server/query";

export const userQuery = createQuery({
  reducerPath: "users",

  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params) => ({
        method: "GET",
        url: "users",
        params,
      }),
      transformResponse: (res) => ({
        users: res.data.map((el) => ({ ...el, key: el._id })),
        total: res.pagination.total,
      }),
    }),
    createUsers: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "users",
        body,
      }),
    }),
    uploadPhoto: builder.mutation({
      query: (body) => ({
        method: "POST",
        url: "auth/upload",
        body,
      }),
    }),
    getOneUsers: builder.mutation({
      query: (id) => ({
        method: "GET",
        url: `users/${id}`,
      }),
    }),
    updateUsers: builder.mutation({
      query: ({ id, body }) => ({
        method: "PUT",
        url: `users/${id}`,
        body,
      }),
    }),
    deleteUsers: builder.mutation({
      query: (id) => ({
        method: "DELETE",
        url: `users/${id}`,
      }),
    }),
  }),
});

const { reducer: usersReducer, reducerPath: usersName } = userQuery;

export { userQuery as default, usersReducer, usersName };

export const {
  useGetUsersQuery,
  useCreateUsersMutation,
  useGetOneUsersMutation,
  useUpdateUsersMutation,
  useDeleteUsersMutation,
  useUploadPhotoMutation,
} = userQuery;

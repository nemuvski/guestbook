import { guestbookApi } from '../api';
import { Post, Posts } from '../../entities/Post';

export type GetPostsParams = {
  page: number;
  numPerPage: number;
};
export type CreatePostRequest = {
  body: string;
};

export const postApi = guestbookApi.injectEndpoints({
  overrideExisting: false,
  endpoints: (builder) => ({
    /**
     * Postのデータ群を取得する
     */
    getPosts: builder.query<Posts, GetPostsParams>({
      query: (params) => ({
        url: '/posts',
        method: 'GET',
        params,
      }),
      providesTags: (result) => {
        if (result && result.items.length) {
          return result.items.map((post) => ({ type: 'Post', id: post.id }));
        }
        return ['Post'];
      },
    }),
    /**
     * Postのデータを登録する
     */
    createPost: builder.mutation<Post, CreatePostRequest>({
      query: ({ body }) => ({
        url: '/posts',
        method: 'POST',
        body: {
          body,
        },
        validateStatus: ({ status }: Response) => status === 201,
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;

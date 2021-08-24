import { guestbookApi } from '../api';
import { buildPost, buildPosts, Post, Posts } from '../../entities/Post';

export type PostPayload = {
  id: string;
  body: string;
  createdAt: string;
};
export type GetPostsParams = {
  page: number;
  numPerPage: number;
};
export type GetPostsPayload = {
  currentPage: number;
  nextPage?: number;
  items: Array<PostPayload>;
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
      transformResponse: (response: GetPostsPayload) => buildPosts(response),
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
      transformResponse: (response: PostPayload) => buildPost(response),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = postApi;

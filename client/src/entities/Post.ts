import dayjs, { Dayjs } from 'dayjs';
import { GetPostsPayload, PostPayload } from '../stores/post/api';

export type Post = {
  id: string;
  body: string;
  createdAt: Dayjs;
};
export const buildPost = (payload: PostPayload): Post => {
  const { id, body, createdAt } = payload;
  return {
    id,
    body,
    createdAt: dayjs(createdAt),
  };
};

export type Posts = {
  currentPage: number;
  nextPage?: number;
  items: Array<Post>;
};
export const buildPosts = (payload: GetPostsPayload) => {
  const { currentPage, nextPage, items } = payload;
  return {
    currentPage,
    nextPage,
    items: items.map((item) => buildPost(item)),
  };
};

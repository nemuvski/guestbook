import { getRepository } from 'typeorm';
import { Post } from '../entity/Post';
import { ICreatePostRequestPayload } from '../route/post.router';

/**
 * DBからPostデータを抽出する
 *
 * @param page
 * @param numPerPage
 * @param take
 */
export const getPosts = async (page: number, numPerPage: number, take?: number) => {
  const postRepository = getRepository(Post);
  return postRepository.find({
    order: { id: 'DESC' },
    take: take ?? numPerPage,
    skip: (page - 1) * numPerPage,
  });
};

/**
 * DBにPostデータを作成する
 *
 * @param payload
 */
export const createPost = async (payload: ICreatePostRequestPayload) => {
  const postRepository = getRepository(Post);
  const post = new Post();
  const { body } = payload;
  return postRepository.save({
    ...post,
    body,
  });
};

import express from 'express';
import { validationResult } from 'express-validator';
import { createPost, getPosts } from '../repository/post.repository';
import PostValidator from '../validation/post.validator';
import { Post } from '../entity/Post';

export interface IGetPostsResponsePayload {
  currentPage: number;
  nextPage?: number;
  posts: Array<ResponsePost>;
}
export interface ICreatePostRequestPayload {
  body: string;
}

/**
 * レスポンスに含める内容のPostのモデル
 */
export class ResponsePost {
  id: string;
  body: string;
  createdAt: Date;

  constructor(post: Post) {
    this.id = post.id.toString();
    this.body = post.body;
    this.createdAt = post.id.getTimestamp();
  }
}

const router = express.Router();

/**
 * 取得
 */
router.get('/', PostValidator.getPostsValidator, async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty() || !req.query) {
    return res.status(400).send({ error: validationErrors.array() });
  }

  // フィールドの有無、整数か否かはValidatorでチェック済
  const { page, numPerPage } = req.query;
  const parsedPage = Number(page);
  const parsedNumPerPage = Number(numPerPage);

  const currentPageResults = await getPosts(parsedPage, parsedNumPerPage);
  const nextPageResults = await getPosts(parsedPage + 1, parsedNumPerPage, 1);
  return res.status(200).send({
    currentPage: parsedPage,
    nextPage: nextPageResults.length ? parsedPage + 1 : undefined,
    posts: currentPageResults.map((result) => new ResponsePost(result)),
  } as IGetPostsResponsePayload);
});

/**
 * 追加
 */
router.post('/', PostValidator.createPostValidator, async (req, res) => {
  const validationErrors = validationResult(req);
  if (!validationErrors.isEmpty()) {
    return res.status(400).send({ error: validationErrors.array() });
  }
  const payload = req.body as ICreatePostRequestPayload;
  const result = await createPost(payload);
  return res.status(201).send(new ResponsePost(result));
});

export default router;

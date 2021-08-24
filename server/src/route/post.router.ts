import express from 'express';
import { validationResult } from 'express-validator';
import { createPost, getPosts } from '../repository/post.repository';
import PostValidator from '../validation/post.validator';
import { Post } from '../entity/Post';

export interface IGetPostsResponsePayload {
  currentPage: number;
  nextPage?: number;
  items: Array<Post>;
}
export interface ICreatePostRequestPayload {
  body: string;
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
    items: currentPageResults,
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
  return res.status(201).send(result);
});

export default router;

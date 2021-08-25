import { query, body } from 'express-validator';

export const getPostsValidator = query(['page', 'numPerPage'])
  .not()
  .isEmpty()
  .withMessage('必須です')
  .isInt({ min: 1 })
  .withMessage('1以上の整数をとります');

export const createPostValidator = body('body')
  .not()
  .isEmpty()
  .withMessage('フィールドが存在しないか、空です')
  .isString()
  .withMessage('文字列のみです')
  .isLength({ max: 100 })
  .withMessage('100文字までです');

export default { getPostsValidator, createPostValidator };

import express from 'express';
import PostRouter from './post.router';

/**
 * パスプレフィックス
 */
const PATH_PREFIX = '/api/v1';

const router = express.Router();

router.use(`${PATH_PREFIX}/posts`, PostRouter);

export default router;

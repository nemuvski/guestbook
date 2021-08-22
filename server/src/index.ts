import express from 'express';
import { PORT } from './constants';

/**
 * Expressの設定
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.listen(PORT, () => {
  console.info(`🚀 Express Server running on port ${PORT}.`);
});

import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';
import morgan from 'morgan';
import Router from './route';

/**
 * dotenvファイルの読み込み
 */
dotenv.config({
  path: path.resolve(process.cwd(), `.env.${process.env.NODE_ENV}`),
});

/**
 * Expressサーバーの設定
 */
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));
app.use(Router);

/**
 * DB接続
 */
createConnection()
  .then(async (connection) => {
    if (!connection.isConnected) throw new Error('Error establishing a database connection');

    // Expressサーバー起動
    app.listen(process.env.EXPRESS_PORT, () => {
      console.info(`🚀 Express Server running on port ${process.env.EXPRESS_PORT}.`);
    });
  })
  .catch((error) => console.error(error));

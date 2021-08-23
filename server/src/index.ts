import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Router from './route';

/**
 * 受け付けるポート番号
 */
const PORT = 5678;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Router);

/**
 * DB接続 (設定はormconfig.jsonを参照)
 */
createConnection()
  .then(async (connection) => {
    if (!connection.isConnected) throw new Error('Error establishing a database connection');

    // Expressサーバー起動
    app.listen(PORT, () => {
      console.info(`🚀 Express Server running on port ${PORT}.`);
    });
  })
  .catch((error) => console.error(error));

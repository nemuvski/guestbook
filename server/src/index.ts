import express from 'express';
import 'reflect-metadata';
import { createConnection } from 'typeorm';

/**
 * 受け付けるポート番号
 */
const PORT = 5678;

createConnection()
  .then(async (connection) => {
    if (!connection.isConnected) throw new Error('Error establishing a database connection');

    const app = express();
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.listen(PORT, () => {
      console.info(`🚀 Express Server running on port ${PORT}.`);
    });
  })
  .catch((error) => console.error(error));

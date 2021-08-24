module.exports = {
  type: 'mongodb',
  useUnifiedTopology: true,
  useNewUrlParser: true,
  authSource: 'admin',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PW,
  database: process.env.DB_DB_NAME,
  logging: true,
  synchronize: false,
  entities: ['src/entity/**/*.ts'],
};

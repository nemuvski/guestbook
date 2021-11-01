# 📗 Guestbook

## 📁 構成

フロントエンドとバックエンド（REST API）を分けています。

```
guestbook
  ├── client (React App)
  └── server (Express)
```

## 🎒 前準備

### Nodeパッケージのインストール

```sh
yarn setup
```

## 🐳 開発に用いるコンテナ

開発時にDockerで **MongoDB** のコンテナを作成して用います。事前にDockerを起動しておいてください。

次のコマンドで操作します。

```sh
# 起動 (コンテナがまだない場合は作成されます)
yarn db:run
# または...
docker-compose up -d

# 停止
yarn db:stop
# または...
docker-compose stop
```

`guestbook` データベースと中で `post` コレクションを用意してください。

## 🚗 ローカルでの実行

ReactのアプリケーションとExpressのアプリケーションが立ち上がります。

```sh
yarn start
```

## 🔧 ビルド

`client` と `server` のコードをそれぞれビルドして、 `client/build/` と `server/build/` に出力されます。

```sh
# 個々
yarn build:client
yarn build:server

# 同時
yarn build
```

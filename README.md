# Guestbook

## 構成

フロントエンドとバックエンド（REST API）を分けています。

```
guestbook
  ├── client (React App)
  └── server (Express)
```

## 前準備

```sh
yarn setup
```

## ローカルでの実行

```sh
yarn start
```

## ビルド

`client` と `server` のコードをそれぞれビルドして、 `client/build/` と `server/build/` に出力されます。

```sh
# 個々
yarn build:client
yarn build:server

# 同時
yarn build
```

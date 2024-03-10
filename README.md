# Todo App

TODO 管理アプリのデモです。

## セットアップ

まず、依存ライブラリをインストールしてください。

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## 開発用ローカルサーバー

開発用のローカルサーバーを起動する際は、以下のコマンドを実行してください。

デフォルトでは、`http://localhost:3000` にて接続を待機します。

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## ビルド

本番環境用にビルドを行う際は、以下のコマンドを実行してください。

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build

# bun
bun run build
```

ビルド後のアプリケーションの動作を確認したい場合は、以下のコマンドを実行してください。

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview

# bun
bun run preview
```

より詳しい情報が必要な場合は、Nuxt.js の [デプロイメントドキュメント](https://nuxt.com/docs/getting-started/deployment) をご覧ください。

## 使い方の簡単な説明

1. アプリケーション上側のテキストボックスに TODO の内容を入力し、追加ボタンを押すと、TODO が追加されます。

    - 「未完了」テーブルに TODO が表示されます。

1. テーブル行の左側のチェックボックスをクリックすると、「未完了」と「完了済み」を切り替えることができます。

    - 「未完了」テーブルが上側に、「完了済み」テーブルが下側に描画されます。

1. テーブル行の右側の削除ボタンをクリックすることで、TODO を削除することができます。

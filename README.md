# README

フロントエンドエンジニアのコーディングテスト用リポジトリです。

## 環境設定

1. `docker-compose build` サービスのビルド。
2. `docker-compose run web bin/rails db:create` DBの作成。
3. `docker-compose run web bin/rails db:migrate` DBマイグレーション実行。
3. `docker-compose run web bin/rails db:seed` 初期レコードをDBに挿入。
4. `docker-compose up` サービス起動。
5. ブラウザで `http://localhost:4000` を開く。
6. Let's write good codes!

拡張子が.js, .jsxのファイルが保存されるとホットリロードされます。

## 課題説明

- 次のURLと同じチェックリストアプリを作ってください。レイアウトやボタンのテキストなど些細な相違があっても結構です。
https://bizer-exam-checklists.herokuapp.com/
- チェックリストをWebAPIからロードし、一覧表示するところまでは実装済みです。
- 下記の残りの機能を実装してください。
  - チェックリストの作成機能
  - チェックリストの削除機能
- WebAPIは既に `app/controllers/api/checklists_controller.rb` で実装済みです。
- 触って頂くのは `app/javascript/packs` 以下だけで大丈夫です。

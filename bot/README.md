# Fortune Discord Bot

このDiscord Botは「占い」と送信されたメッセージに対して、FortuneWebhook APIを使用して運勢を返信します。

## セットアップ方法

1. 必要なパッケージをインストールします:
```
npm install
```

2. `.env.example`ファイルを`.env`にコピーし、以下の値を設定します:
   - `DISCORD_BOT_TOKEN`: Discord Developer Portalで取得したBotのトークン
   - `WEBHOOK_ENDPOINT`: FortuneWebhook APIのエンドポイントURL（デフォルトは`https://fortune-webhook-production.up.railway.app/webhook`）

3. Discord Developer Portalで以下の設定を行います:
   - Bot設定ページで「MESSAGE CONTENT INTENT」を有効にする

## 使用方法

1. Botを起動します:
```
node bot.js
```

2. DiscordサーバーでBotを招待し、「占い」とメッセージを送信すると、ランダムな運勢が返ってきます。

## 機能

- 「占い」メッセージに対して、ランダムな運勢を返信
- エラーハンドリング機能あり

## 注意事項

- 本番環境では、トークンなどの機密情報は環境変数として管理しています
- `.env`ファイルは`.gitignore`に含まれているため、リポジトリにはアップロードされません

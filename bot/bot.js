// 環境変数を読み込む
require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js');
const fetch = require('node-fetch');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// 環境変数からトークンとエンドポイントを取得
const TOKEN = process.env.DISCORD_BOT_TOKEN;
const ENDPOINT = process.env.WEBHOOK_ENDPOINT;

client.on('messageCreate', async (message) => {
  if (message.author.bot) return;

  if (message.content === '占い') {
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: '占い' })
      });
      const data = await res.json();
      message.reply(data.reply);
    } catch (err) {
      message.reply('占い結果の取得に失敗しました😥');
      console.error(err);
    }
  }
});

client.login(TOKEN);

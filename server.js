const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Fortune results array
const fortuneResults = [
  '大吉！今日は最高の一日になるでしょう',
  '中吉。思わぬ幸運が訪れるかも',
  '小吉。いつも通りの日常に感謝を',
  '凶。無理せず慎重に行動しましょう',
  '大凶…。でも明日は良くなるはず！'
];

// Get random fortune from the array
function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortuneResults.length);
  return fortuneResults[randomIndex];
}

// Webhook endpoint
app.post('/webhook', (req, res) => {
  try {
    const requestBody = req.body;
    
    // Check if the request contains the message "占い"
    if (requestBody && requestBody.message === '占い') {
      // Return a random fortune
      const fortune = getRandomFortune();
      return res.json({ reply: fortune });
    } else {
      // Return error for invalid requests
      return res.json({ error: 'invalid request' });
    }
  } catch (error) {
    console.error('Error processing webhook:', error);
    return res.status(400).json({ error: 'invalid request' });
  }
});

// Basic route for testing
app.get('/', (req, res) => {
  res.send('FortuneWebhook API is running. Send a POST request to /webhook with {"message": "占い"} to get your fortune.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

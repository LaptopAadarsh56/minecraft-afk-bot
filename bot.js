const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'MOREYT.aternos.me',
    port: 38305,
    username: 'AFK_Bot_1', // Bot ka naam
    version: false
  });

  bot.on('spawn', () => {
    console.log('✅ Bot has joined the server!');
  });

  bot.on('end', () => {
    console.log('🔁 Bot disconnected. Reconnecting...');
    setTimeout(createBot, 5000);
  });

  bot.on('error', err => {
    console.log('❌ Error: ', err);
  });
}

createBot();

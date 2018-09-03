const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`[BOT] ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.channel.send('Pong!');
  }

  if (msg.content === 'sa') {
    msg.reply('Aleykum Selam knk :)');
  }

  if (msg.content === 'selamun aleyküm') {
    msg.reply('Aleykum Selam knk :)');
  }

  if (msg.content === 'selamın aleyküm') {
    msg.reply('Aleykum Selam knk :)');
  }

  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDg2MTkzMDk3MTIyNzc1MDQw.Dm7ktg.lmKwSQ3V3rRwo1xH0XBhQ5c80ME');

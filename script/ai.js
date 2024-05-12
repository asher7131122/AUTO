const axios = require('axios');
module.exports.config = {
  name: 'ai',
  version: '1.0.0',
  role: 0,
  hasPrefix: false,
  aliases: ['gpt', 'openai'],
  description: "An AI command powered by GPT-4",
  usage: "Ai [promot]",
  credits: 'Developer',
  cooldown: 3,
};
module.exports.run = async function({
  api,
  event,
  args
}) {
  const input = args.join(' ');
  if (!input) {
    api.sendMessage(`i love you baby ${name}\ ano gawa mo baby?'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`wait love "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://soyeon-gpt4.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage(response + '\n\nhttps://auto-4ltq.onrender.com', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('love di ko hanap ☹️🥺.', event.threadID, event.messageID);
  }
};

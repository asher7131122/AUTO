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
    api.sendMessage(`putangina mo lagyan mo question example: ai 5 little monkey jumping on the bed?'`, event.threadID, event.messageID);
    return;
  }
  api.sendMessage(`wait boss "${input}"`, event.threadID, event.messageID);
  try {
    const {
      data
    } = await axios.get(`https://soyeon-gpt4.onrender.com/api?prompt=${encodeURIComponent(input)}`);
    const response = data.response;
    api.sendMessage(response + '\n\nhttps://bit.ly/create-chatbot-me', event.threadID, event.messageID);
  } catch (error) {
    api.sendMessage('Yawa ka na mali pre.', event.threadID, event.messageID);
  }
};


const threadUtils = require("../threadUtils");

module.exports = (bot, sse) => {
  const addInboxServerCommand = (...args) => threadUtils.addInboxServerCommand(bot, ...args);

  // Mods can reply to modmail threads using !r or !reply
  // These messages get relayed back to the DM thread between the bot and the user
  addInboxServerCommand('ping', async (msg, args, thread) => {
	  
	let time = Date.now();
    let message = await bot.createMessage(msg.channel.id, 'Pong!');
    return message.edit(`Pong! \`${Date.now() - time } ms\``);
  });

  bot.registerCommandAlias('p', 'ping');
};

const attachments = require("../data/attachments");
const config = require('../config');
const threadUtils = require("../threadUtils");

module.exports = bot => {
  const addInboxServerCommand = (...args) => threadUtils.addInboxServerCommand(bot, ...args);

  addInboxServerCommand('ping', async (msg, args, thread) => {
    // if (! thread) return;
    let time = Date.now();
    let message = await msg.channel.createMessage('pong!');
    message.edit(`Pong! ${Date.now() - time} ms`);
  });
};

const {
  ActivityType
} = require('discord.js');

module.exports = (client) => {
  console.log(`${client.user.tag} is online.`);
  client.user.setActivity('MinGG Network Ontop⬆️', { type: ActivityType.Playing });
};

const {
  ApplicationCommandOptionType, EmbedBuilder, MessageFlags,
  PermissionFlagsBits,
} = require('discord.js');
const { staffOnly } = require('./server-maintenance');

module.exports = {
  name: 'server-shut-down',
  description: 'Server Status Down.',
  // devOnly: Boolean,
  testOnly: true,
  //deleted: true,
  staffOnly: true,
  options: [
    {
        name: 'shut-down-message',
        description: 'Server Shut Down Message.',
        type: ApplicationCommandOptionType.String,
    },
  ],

  callback: (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

        const channel = client.channels.cache.get('1468704999516410080');
        const statusMessage = interaction.options.get('shut-down-message')?.value ?? 'Server is down';
        const voiceChannel = interaction.guild.channels.cache.get("1467287121617227958");
        const newname = "Server Status • Offline🔴"
        const embed = new EmbedBuilder()

  .setTitle("**Server Status**")
  .setDescription("This is the current status of the servers for MineGG Network this includes (\"MineGG\", \"Obsidian Events\")")
  .addFields(
    {
      name: "Server Status:",
      value: "**Ofline <:Server_Offline:1461237407293902942>**",
      inline: false
    },
    {
      name: "Server Status Message:",
      value: `${statusMessage}`,
      inline: false
    },
  )
  .setColor("#00e4f5");

channel.send({embeds: [embed]});
interaction.reply({content: 'Server Status updated ( Current Status: Offline )', flags: MessageFlags.Ephemeral})
voiceChannel.edit({name: newname}); 

    },
};

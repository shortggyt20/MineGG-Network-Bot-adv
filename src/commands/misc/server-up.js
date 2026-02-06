const {
  ApplicationCommandOptionType, EmbedBuilder, MessageFlags,
  PermissionFlagsBits,
} = require('discord.js');
const { staffOnly } = require('./server-maintenance');

module.exports = {
  name: 'server-up',
  description: 'Server Status Up..',
  // devOnly: Boolean,
  testOnly: true,
  //deleted: true,
  staffOnly: true,
  options: [
    {
        name: 'start-up-message',
        description: 'Server Start Up Message.',
        type: ApplicationCommandOptionType.String,
    },
  ],

  callback: (client, interaction) => {
    if (!interaction.isChatInputCommand()) return;

    const channel = client.channels.cache.get('1468704999516410080');
    const statusMessage = interaction.options.get('start-up-message')?.value ?? "Server is up";
    const voiceChannel = interaction.guild.channels.cache.get("1467287121617227958");
    const newname = "Server Status • Online🟢"
    const exampleEmbed = new EmbedBuilder()
    
    .setTitle("**Server Status**")
    .setDescription("This is the current status of the servers for MineGG Network this includes (\"MineGG\", \"Obsidian Events\")")
    .addFields(
    {
      name: "Server Status:",
      value: "**Online <:Server_Online:1461237598029615114>**",
      inline: false
    },
    {
      name: "Server Status Message:",
      value: `${statusMessage}`,
      inline: false
    },
  )
  .setColor("#00e4f5");
channel.send({ embeds: [exampleEmbed] });
interaction.reply({content: 'Server Status updated ( Current Status: Online )', flags: MessageFlags.Ephemeral})
voiceChannel.edit({name: newname});
    },
};

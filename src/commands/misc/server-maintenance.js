const {
  ApplicationCommandOptionType, EmbedBuilder, MessageFlags,
  PermissionFlagsBits,
} = require('discord.js');

module.exports = {
  name: 'server-maintenance',
  description: 'Server Status Maintenance.',
  // devOnly: Boolean,
  testOnly: false,
  //deleted: true,
  staffOnly: true,
  options: [
    {
        name: 'maintenance-message',
        description: 'Server Maintenance Message.',
        type: ApplicationCommandOptionType.String,
    }
  ],

    callback: (client, interaction) => {
        if (!interaction.isChatInputCommand()) return;
            const channel = client.channels.cache.get('1468704999516410080');
            const statusMessage = interaction.options.get('maintenance-message')?.value ?? 'Server is under maintenance';
            const voiceChannel = interaction.guild.channels.cache.get("1467287121617227958");
            const newname = "Server Status • Maintenance🟡"
            const embed = new EmbedBuilder()

    .setTitle("**Server Status**")
    .setDescription("This is the current status of the servers for MineGG Network this includes (\"MineGG\", \"Obsidian Events\")")
    .addFields(
        {
        name: "Server Status:",
        value: "**Maintenance <:Server_Restart:1461237543591743571>**",
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
        interaction.reply({content: 'Server Status updated ( Current Status: Maintenance )', flags: MessageFlags.Ephemeral})
        voiceChannel.edit({name: newname});
    },
  };
const Discord = require('discord.js');

module.exports = {
    name: 'countemoji',
    description: '[❓️ » Infos] Veja a lista de emojis',
    type: Discord.ApplicationCommandType.ChatInput,

    run: async(client, interaction, args) => {
        if(!interaction.guild.emojis.cache.map((r) => r).join(' ')) {
interaction.reply(`Esse servidor não tem emojis`)
        } else {
            const emojis = interaction.guild.emojis.cache.map((r) => r).join(' ');
       let normais = `${interaction.guild.emojis.cache.filter((r) => r.animated === false).size}`;
       let animados = `${interaction.guild.emojis.cache.filter((r) => r.animated).size}` | "num temkkk"
       let total = `${interaction.guild.emojis.cache.size}`;

       const embed = new Discord.EmbedBuilder() 
            .setTitle(interaction.guild.name, interaction.guild.iconURL({ dynamic: true }))
            .setTitle(
                `Emojis normais: ${normais} 
Emojis animados: ${animados}
Total: ${total}`)
            .setDescription(emojis.toString())
            .setColor('#ff0000')
        return interaction.reply({ embeds: [embed] });
  
        }
          },
};

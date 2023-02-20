const Discord = require("discord.js")
const { EmbedBuilder } = require('discord.js');

module.exports =  {
    name: "",
    description: "",
    type: Discord.ApplicationCommandType.ChatInput,  
    Options: [
        {
            name: "",
            description: "",
            type: Discord.ApplicationCommandType.Number,
            equired: true, 
        }
    ],

        run: async (client, interaction) => {

        }
    }

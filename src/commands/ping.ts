// import { SlashCommandBuilder } from "@discordjs/builders";
import { CommandInteraction, ApplicationCommandType } from "discord.js"
import {Command} from "./command"

const ping: Command = { 
    name: "ping",
    description: "Replies with \"pong!\"",
    type: ApplicationCommandType.ChatInput,
    execute: async(interaction: CommandInteraction) => {
        await interaction.reply("pong!")
    }
}

export default ping
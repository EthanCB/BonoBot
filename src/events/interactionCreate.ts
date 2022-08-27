import { BaseInteraction, CommandInteraction } from "discord.js"
import { Commands } from "../commands"
import { Event } from "./events"

const interactionCreate: Event = {
    name: "interactionCreate",
    once: false,
    execute: async (interaction: BaseInteraction) => {
        console.log("Interaction created.")
        if(interaction.isChatInputCommand()){
            await handleChatInputCommand(interaction)
        }
    }
}

const handleChatInputCommand = async (interaction: CommandInteraction): Promise<void> => {
    console.log("Handling chat input command.")
    const command = Commands.find(c => c.name === interaction.commandName)
    if(!command){
        console.log("Chat input command not found.")
        interaction.reply({content: "Command not found."})
        return
    }

    await command.execute(interaction)
}

export default interactionCreate
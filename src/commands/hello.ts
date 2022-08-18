import { 
    CommandInteraction, 
    Client, 
    ApplicationCommandType 
} from "discord.js"
import { Command } from "../interfaces/command"

export const Hello: Command = {
    name: "hello",
    description: "Returns a greeting",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        // let content = italic("Hello there!")
        // let content = bold("Hello there!")
        // let content = underscore("Hello there!")
        // let content = strikethrough("Hello there!")
        // let content = quote("Hello there!")
        // let content = blockQuote("Hello\nthere!")
        let content = "Hello there!"

        console.log(content)

        await interaction.followUp({
            ephemeral: true,
            content
        })
    }
}
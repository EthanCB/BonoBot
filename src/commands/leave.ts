import { CommandInteraction, Client, ApplicationCommandType } from "discord.js";
import { Command } from "../interfaces/command";

export const Leave: Command = {
    name: "leave",
    description: "Kills BonoBot",
    type: ApplicationCommandType.ChatInput,
    run: async (client: Client, interaction: CommandInteraction) => {
        const content = "Okay... Goodbye... :(";

        await interaction.followUp({
            ephemeral: true,
            content
        });
        process.exit()
    }
};
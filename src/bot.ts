import { Client, CommandInteraction, CommandInteractionOptionResolver, IntentsBitField, Routes } from "discord.js"
import auth from "../config.json"
import { Events } from "./events"

// import { Events } from "./events"
// import ready from "./events/ready"
// import { Commands } from "./commands"
// import { assertReturnOfBuilder } from "@discordjs/builders/dist/interactions/slashCommands/Assertions";
// import path from "path"
// import fs from "fs"

// Get token from config
const token = auth.token;

console.log("Bot is starting...");

// Create new client instance
const client = new Client({
    intents: [IntentsBitField.Flags.Guilds]
})

// Create listener for each event
for(let event of Events){
    if(event.once){
        client.once(event.name, (...args) => event.execute(...args))
    }
    else{
        client.on(event.name, (...args) => event.execute(...args))
    }
}

// Login to Discord with client's token
client.login(token)

// Events.forEach(event => {
//     if(event.once){
//         client.once(event.name, async (...args) => event.execute(...args))
//     }
// })

// When ready, run this code once
// client.once('ready', async () => {
//     if(!client.user || !client.application){
//         return
//     }

//     await client.application.commands.set(Commands)

//     console.log("Ready!")
// })

// const handleSlashCommand = async (interaction: CommandInteraction): Promise<void> => {
//     const slashCommand = Commands.find(c => c.name === interaction.commandName)
//     if(!slashCommand){
//         interaction.followUp({content: "An error has occured.", ephemeral: true})
//         return
//     }

//     await interaction.deferReply()
//     slashCommand.execute(interaction)
// }

// When interaction is created, process
// client.on('interactionCreate', async interaction => {
//     if (interaction.isChatInputCommand()){
//         await handleSlashCommand(interaction)
//     }
// })






    // if (!interaction.isChatInputCommand()) {
    //     return
    // }
    // else {
    //     const command = client.application?.commands.get(interaction.commandName);

    //     if (!command) return;

    //     try {
    //         await command.execute(interaction);
    //     } catch (error) {
    //         console.error(error);
    //         await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
    //     }

        // const { commandName } = interaction

        // if (commandName === "ping") {
        //     await interaction.reply("Pong!");
        // } else if (commandName === "server") {
        //     await interaction.reply(`Server name: ${interaction.guild?.name}\nTotal members: ${interaction.guild?.memberCount}`);
        // } else if (commandName === "user") {
        //     await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
//         // }
//     }
// })



// const commandsPath = path.join(__dirname, "commands")
// const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".ts"))

// for (const file of commandFiles) {
//     const filePath = path.join(commandsPath, file)
//     const command = require(filePath)

//     client.application.commands.set(command.data.name)
// }








// import { Client, ClientOptions } from "discord.js"
// import ready from "./listeners/ready"
// import interactionCreate from "./listeners/interactionCreate"
// import auth from "../config.json"

// const token = auth.token;

// console.log("Bot is starting...");

// const client = new Client({
//     intents: []
// });

// ready(client)
// interactionCreate(client)

// client.login(token)
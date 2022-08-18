import { Client, ClientOptions } from "discord.js"
import ready from "./listeners/ready"
import interactionCreate from "./listeners/interactionCreate"
import auth from "../config.json"

const token = auth.token;

console.log("Bot is starting...");

const client = new Client({
    intents: []
});

ready(client)
interactionCreate(client)

client.login(token)


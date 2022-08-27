import { Client } from "discord.js"
import { Commands } from "../commands"
import { Event } from "./events"

const ready: Event = {
    name: "ready",
    once: true,
    execute: async (client: Client) => {
        if(!client.user || !client.application){
            return
        }

        client.application.commands.set(Commands)

        console.log(`Ready! Logged in as ${client.user.username}`)
    }
}

export default ready
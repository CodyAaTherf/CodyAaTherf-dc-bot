const { Client , Intents } = require('discord.js')
const commandingjs = require('commanding.js')
const config = require('./config.json')

const client = new Client({ intents: [Intents.FLAGS.GUILDS]})

client.once('ready' , () => {
    console.log("Ready!");

    new commandingjs(client , 'commands')
        .setDefaultPrefix('>')
})

client.login(config.token)
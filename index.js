const Discord = require('discord.js')
const client = new Discord.Client()

require('dotenv').config()

require('./src/handler/events')(client)
require('./src/handler/commands')(client)

client.login(process.env.TOKEN)

const { MessageEmbed } = require('discord.js')
require('dotenv').config()

module.exports = (client, msg) => {
  if (msg.author.bot) return
  if (msg.channel.type === 'dm') return

  if (msg.content.indexOf(process.env.PREFIX) !== 0) return

  const args = msg.content.slice(process.env.PREFIX.length).trim().split(/ +/g)
  const cmd = args.shift().toLowerCase()
  if (cmd.length === 0) return

  let command = client.commands.get(cmd)

  if (command) {
    command.run(client, msg, args, MessageEmbed)
  } else {
    command = client.commands.get(client.aliases.get(cmd))
  }
}

const Discord = require('discord.js')
const fs = require('fs')

module.exports = (client) => {
  client.commands = new Discord.Collection()
  client.aliases = new Discord.Collection()

  console.time('Time loads commands')

  fs.readdir('./src/commands/', (err, files) => {
    if (err) return console.error(err)
    for (let a = 0; a < files.length; a++) {
      fs.readdir('./src/commands/' + files[a] + '/', (err, file) => {
        if (err) return console.error(err)
        for (let b = 0; b < file.length; b++) {
          const pull = require('../commands/' + files[a] + '/' + file[b])
          if (pull.help.name) {
            client.commands.set(pull.help.name, pull)
          }
          if (pull.help.aliases && Array.isArray(pull.help.aliases)) pull.help.aliases.forEach(alias => client.aliases.set(alias, pull.help.name))
        }
      })
    }
  })
  console.timeEnd('Time loads commands')
}

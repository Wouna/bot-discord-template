require('dotenv').config()

exports.run = (client, msg, args, MessageEmbed) => {
  if (args[0]) {
    const cmd = client.commands.get(args.join(' '))
    if (!cmd) return msg.channel.send(':x: Commands not found with name `' + args.join(' ') + '` !')

    let alias
    const aliases = cmd.help.aliases
    if (aliases[0] === '') {
      alias = 'No aliases.'
    } else {
      alias = cmd.help.aliases
    };

    const infoCommands = new MessageEmbed()
      .setAuthor('Help Commands', client.user.displayAvatarURL({ format: 'png' }))
      .setDescription('<args> | obligatory\n[args] | optional')
      .addField('Name', cmd.help.name)
      .addField('Aliases', alias)
      .addField('Category', cmd.help.category)
      .addField('Description', cmd.help.description)
      .addField('Usage', process.env.PREFIX + cmd.help.usage)

    msg.channel.send(infoCommands)
  } else {
    const categories = []
    client.commands.forEach((command) => {
      if (!categories.includes(command.help.category)) {
        if (command.help.category === 'OWNER' && msg.author.id !== process.env.OWNERID) return
        categories.push(command.help.category)
      };
    })

    const embed = new MessageEmbed()
      .setAuthor('Help Menu', client.user.displayAvatarURL({ format: 'png' }))
      .setFooter('Need help with a commands? Type: ' + process.env.PREFIX + 'help <command name>')

    categories.sort().forEach((category) => {
      const commandes = client.commands.filter((cmd) => cmd.help.category === category)
      embed.addField(category + ' - (' + commandes.size + ')', commandes.map((cmd) => '`' + cmd.help.name + '`').join(', '))
    })
    msg.channel.send(embed)
  };
}

exports.help = {
  name: 'help',
  aliases: [''],
  category: 'Users',
  description: 'See a help of the bot.',
  usage: 'help'
}

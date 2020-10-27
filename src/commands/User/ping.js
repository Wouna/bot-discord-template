exports.run = async (client, msg, args, MessageEmbed) => {
  const msgPing = await msg.channel.send('Pinging...')
  const ping = msgPing.createdTimestamp - msg.createdTimestamp

  await msgPing.edit(Math.round(ping) + 'ms')
}

exports.help = {
  name: 'ping',
  aliases: [''],
  category: 'Users',
  description: 'A simple ping command.',
  usage: 'ping'
}

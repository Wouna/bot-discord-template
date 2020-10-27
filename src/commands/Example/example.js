exports.run = async (client, msg, args, MessageEmbed) => {
  msg.channel.send('Example commands.')
  /// YOUR CODE
}

exports.help = {
  name: 'example',
  /// NAME COMMANDS
  aliases: [''],
  /// ADD ALIASES IF YOU WANT
  category: 'Example',
  /// SET A CATEGORY
  description: 'description',
  /// MAKE A DESCRIPTION
  usage: 'works'
  /// HOW TO WORK COMMAND
}

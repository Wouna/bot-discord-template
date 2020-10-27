require('dotenv').config()

module.exports = (client) => {
  client.user.setActivity(process.env.PREFIX + 'help')
  console.log(client.user.tag + ' is online !')
}

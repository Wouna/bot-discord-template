const fs = require('fs')

module.exports = (client) => {
  console.time('Time loads events')
  fs.readdir('./src/events/', (err, files) => {
    if (err) return console.error(err)

    files.forEach(file => {
      if (!file.endsWith('.js')) return
      const event = require('../events/' + file)
      const eventName = file.split('.')[0]

      client.on(eventName, event.bind(null, client))
      delete require.cache[require.resolve('../events/' + file)]
    })
  })
  console.timeEnd('Time loads events')
}

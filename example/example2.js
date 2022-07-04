const cli = require('cac')()

cli.option('--type [type]', 'Choose a project type', {
  default: 'node'
})

cli.option('--name <name>', 'Provide your name')

cli.command('lint [...files]', 'lint files').action((files, options) => {
  console.log(files, options)
})

cli.help()

cli.version('0.0.0')

const parsed = cli.parse()

console.log(JSON.stringify(parsed, null, 2))

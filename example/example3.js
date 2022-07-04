const cli = require('cac')()

cli
  .command('rm <dir>', 'Remove a dir')
  .option('-r, --recursive', 'Remove recursively')
  .action((dir, options) => {
    console.log('remove ' + dir + (options.recursive ? ' recursively ' : ''))
  })

cli.help()

cli.parse()

// A command's options are validated when the command is used. Any unknown options will be reported as an error.
// However, if an action-based command does not define an action, then the options are not validated. 
// If you really want to use unknown options, use command.allowUnknownOptions.

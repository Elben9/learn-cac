const cli = require('cac')()

cli
  .command('deploy <folder>', 'Deploy a folder to AWS')
  .option('--scale [level]', 'Scaling level')
  .action((folder, options) => {
    // ...
  })

cli
  .command('build [project]', 'Build a project')
  .option('--out <dir>', 'Output directory')
  .action((folder, options) => {
    // ...
  })

const parsed = cli.parse()

console.log(JSON.stringify(parsed, null, 2))

// When using brackets in command name, angled brackets indicate required command arguments
// while square bracket indicate optional arguments.

// When using brackets in option name, angled brackets indicate that a string / number value is required,
// while square bracket indicate that the value can also be true.

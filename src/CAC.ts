import mri from 'mri'
import Command from './Command'
import { OptionConfig } from './Option'

class CAC {
  private globalCommand
  constructor () {
    this.globalCommand = new Command()
  }
  option (rawName: string, desc: string, config?: OptionConfig) {
    this.globalCommand.option(rawName, desc, config)
  }
  parse (argv) {
    // 解析参数
    const mriResult = mri(argv)
    console.log(mriResult)
    console.log('options', this.globalCommand.options)
    // 拿出用户输入的参数，赋值给options
    const options =  this.globalCommand.options.reduce((options, option) => {
      options[option.rawName] = mriResult[option.rawName] || option.config.default
      return options
    }, {})
    return {
      args: [],
      options: {
        ...options,
        '--': [],
      },
    }
  }
}

export default CAC

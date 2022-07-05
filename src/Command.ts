import Option, { OptionConfig } from './Option'

class Command {
  private options
  constructor () {
    this.options = []
  }
  option (rawName: string, desc: string, config?: OptionConfig) {
    const option = new Option(rawName, desc, config)
    this.options.push(option)
  }
}

export default Command

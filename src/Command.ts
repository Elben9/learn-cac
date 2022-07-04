import Option from './Option'

class Command {
  private options
  constructor () {
    this.options = []
  }
  option (rawName: string, desc: string) {
    const option = new Option(rawName, desc)
    this.options.push(option)
  }
}

export default Command

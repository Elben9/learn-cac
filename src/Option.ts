interface OptionConfig {
  default?: any
  type?: any[]
}

class Option {
  rawName: string
  desc: string
  config: OptionConfig
  constructor(rawName: string, desc: string, config?: OptionConfig) {
    this.rawName = rawName
    this.desc = desc
    console.log('config', config)
    this.config = Object.assign({}, config)
    // 过滤掉--
    const resolvedName = rawName.match(/--(\w+) \<(\w+)\>/)?.[1];
    if(resolvedName) this.rawName = resolvedName
  }
}

export default Option
export type { OptionConfig }

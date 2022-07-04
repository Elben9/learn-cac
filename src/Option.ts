class Option {
  rawName: string
  desc: string
  constructor(rawName: string, desc: string) {
    this.rawName = rawName
    this.desc = desc
    // 过滤掉--
    const resolvedName = rawName.match(/--(\w+) \<(\w+)\>/)?.[1];
    if(resolvedName) this.rawName = resolvedName
  }
}

export default Option

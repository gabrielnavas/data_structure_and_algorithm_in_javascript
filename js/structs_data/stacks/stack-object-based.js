module.exports = class StackObjectBased {
  constructor() {
    this.stack = {}
    this.count = 0
  }

  push = data => {
    this.stack[this.count++] = data
  }

  pop = () =>  {
    if(this.count === 0) return undefined
    const data = this.stack[--this.count]
    delete this.stack[this.count]
    return data
  }

  size = () => this.count

  peek = () => this.stack[this.count-1]

  isEmpty = () => this.count === 0

  clear = () => {
    this.stack = {}
    this.count = 0
  }

  toString = () => this.isEmpty() 
    ? '[ ]'
    : `[ ${Object.values(this.stack).join(', ')} ]`
}
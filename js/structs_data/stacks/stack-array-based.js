
class StackArrBased {
  constructor() {
    this.stack = []
  }

  push = data => {
    this.stack[this.stack.length] = data
    return this.stack.length
  }

  pop = () => {
    return this.stack.pop(this.stack.length)
  }

  size = () => this.stack.length

  peek = () => {
    return this.stack[this.stack.length-1]
  }

  isEmpty = () => this.stack.length === 0

  clear = () => this.stack.length = 0

  toString = () => this.isEmpty() 
    ? '[ ]'
    : `[ ${this.stack.join(', ')} ]`
}
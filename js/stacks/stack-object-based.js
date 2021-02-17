class StackObjectBased {
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

const s = new StackObjectBased()
Array(...[2,4,6,8]).forEach(n => s.push(n))
console.log(s.toString()) 
console.log(s.pop()) 
console.log(s.pop()) 
console.log(s.isEmpty()) 
console.log(s.peek()) 
console.log(s.pop()) 
console.log(s.size()) 
console.log(s.pop()) 
console.log(s.pop()) 
console.log(s.pop()) 
console.log(s.pop()) 
console.log(s.pop()) 
console.log(s.peek()) 
console.log(s.clear()) 


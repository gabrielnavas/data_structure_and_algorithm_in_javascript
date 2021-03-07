const Stack = require('../stacks/stack-object-based')

const decimalToBinary = decimalNumber => {
  const stack = new Stack()
  let n = decimalNumber
  let binaryStr = ''
  while(n > 0) {
    stack.push(n % 2)
    n = Math.floor(n / 2)
  }
  while(!stack.isEmpty()) {
    binaryStr += stack.pop()
  }
  return binaryStr
}


console.log(decimalToBinary(1000000000000000)) 
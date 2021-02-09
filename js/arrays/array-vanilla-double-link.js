/**
 * INITITAL_NODE -> <- NODE -> <- NODE ->  <- NODE -\\
 */

const makeNewNode = (
  data=0, 
  previous=null,
  next=null
) => ({data, previous, next})

class ArrayDoubleNode {
  constructor() {
    this.initialNode = null
  }

  toString = () => {
    let node = this.initialNode
    let str = '[ '
    while(node !== null) {
      console.log(node.data)
      if(node.next === null) {
        str = ` ${str}${node.data}`
      } else  {
        str = ` ${str}${node.data}, `
      }
      node = node.next
    }
    str = `${str} ]`
    return str
  }

  push = data => {
    if(this.initialNode === null) {
      this.initialNode = makeNewNode(data)
    } else {
      let node = this.initialNode
      while(node.next !== null) {
        node = node.next
      }
      const newNode = makeNewNode(data, node)
      node.next = newNode
    }
    return this
  }


  // ta errado!!
  unshift = data => {
    if(this.initialNode === null) {
      this.initialNode = makeNewNode(data)
      return
    } 
    const inititalNodeAux = this.initialNode
    const newNode = makeNewNode(data, null, this.initialNode)
    inititalNodeAux.previous = newNode
    this.inititalNodeAux = newNode
  }
}

const arr = new ArrayDoubleNode()
// arr.push(2)
// arr.push(4)
// arr.push(6)
// arr.push(8)
// arr.push(10)
arr.unshift(1)
arr.unshift(11)
console.log(arr.toString())
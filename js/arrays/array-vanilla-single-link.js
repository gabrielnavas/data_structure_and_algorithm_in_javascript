/**
 * INITITAL_NODE -> NODE -> NODE -> NODE -\\
 */

const makeNewNode = (data = 0, nextNode = null) => ({ 
  nextNode, 
  data
}) 

class ArraySingleNode {
  constructor( ) {
    this.initialNode = null
  }

  toString = () => {
    let node = this.initialNode
    let str = '[ '
    while(node !== null) {
      if(node.nextNode === null) {
        str += `${node.data} `
      } else {
        str += `${node.data}, `
      }
      node = node.nextNode
    }
    str += ']'
    return str
  }

  push = data => {
    if(this.initialNode === null) {
      this.initialNode = makeNewNode(data)
      return this
    }
    let previousnode = this.initialNode
    let nodeNow = previousnode.nextNode
    while(nodeNow !== null) {
      previousnode = nodeNow
      nodeNow = nodeNow.nextNode
    }
    previousnode.nextNode = makeNewNode(data)
    return this
  }

  unshift = data => {
    if(this.initialNode === null) {
      this.initialNode = makeNewNode(data)
      return this
    }
    const oldFirstNode = this.initialNode
    const newFirstNode = makeNewNode(data)
    this.initialNode = newFirstNode
    newFirstNode.nextNode = oldFirstNode
    return this
  }

  isEmpty = () => this.initialNode === null

  pop = () => {
    if(this.initialNode.nextNode === null) {
      this.initialNode = null
      return this
    }
    let previousNode = this.initialNode
    let nodeNow = previousNode.nextNode
    while(nodeNow.nextNode !== null) {
      previousNode = nodeNow
      nodeNow = nodeNow.nextNode
    }
    previousNode.nextNode = null
    return this
  }

  shift = () => {
    this.initialNode = this.initialNode.nextNode
    return this
  }

  reverse = () => {
    const reverseRecursive = (nodeNow) => {
      if(nodeNow.nextNode !== null) {
        const nextNode = reverseRecursive(nodeNow.nextNode)
        if(nextNode.nextNode === null) {
          this.initialNode = nodeNow
          return nodeNow
        }
        nextNode.nextNode = nodeNow
      } 
      return nodeNow
    }
    const lastNode = reverseRecursive(this.initialNode)
    lastNode.nextNode = null
    return this
  }

  join = (separator=',') => {
    let str = ''
    let node = this.initialNode
    while(node !== null) {
      str += node.nextNode ? `${node.data}${separator}` : `${node.data}`
      node = node.nextNode
    }
    return str
  }

  indexOf = (data) => {
    let position = 0
    let node = this.initialNode
    while(node !== null && node.data !== data) {
      position = position + 1
      node = node.nextNode
    }
    return node === null ? -1 : position
  }

  lastIndexOf = (data) => {
    let position = 0
    let lastPosition = -1
    let node = this.initialNode
    while(node !== null) {
      if(node.data === data) {
        lastPosition = position
      }
      position = position + 1
      node = node.nextNode
    }
    return lastPosition
  }

  forEach = callback => {
    let index = 0
    let inititalNodeReference = this.initialNode
    let node = this.initialNode
    while(node !== null) {
      callback(index, node.data, inititalNodeReference)
      node = node.nextNode
      index = index+1
    }
    return this
  }

  concatOtherArray = (otherArray) => {
    if(this.initialNode === null) {
      this.initialNode = otherArray
      return this
    }
    let node = this.initialNode
    while(node.nextNode !== null) {
      node = node.nextNode
    }  
    node.nextNode = otherArray
  }
}

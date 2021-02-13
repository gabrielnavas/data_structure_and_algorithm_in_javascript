/**
 * INITITAL_NODE -> NODE -> NODE -> NODE -\\
 */
class Node {
  constructor(data = null, next = null) {
    this.data = data
    this.next = next
  }
}

class ArraySingleLink {
  constructor( ) {
    this.head = null
    this.count = 0
  }

  push = data => {
    if(this.isEmpty()) {
      this.head = new Node(data)
    } else {
      let previousNode = this.head
      let nodeNow = previousNode.next
      while(nodeNow !== null) {
        previousNode = nodeNow
        nodeNow = nodeNow.next
      }
      previousNode.next = new Node(data)
    }
    return ++this.count
  }

  unshift = data => {
    if(this.isEmpty()) {
      this.head = new Node(data)
    } else {
      const newNode = new Node(data, this.head)
      this.head = newNode
    }
    return ++this.count
  }

  isEmpty = () => this.head === null

  // pop = () => {
  //   if(this.head.nextNode === null) {
  //     this.head = null
  //     return this
  //   }
  //   let previousNode = this.head
  //   let nodeNow = previousNode.nextNode
  //   while(nodeNow.nextNode !== null) {
  //     previousNode = nodeNow
  //     nodeNow = nodeNow.nextNode
  //   }
  //   previousNode.nextNode = null
  //   return this
  // }

  // shift = () => {
  //   this.head = this.head.nextNode
  //   return this
  // }

  // reverse = () => {
  //   const reverseRecursive = (nodeNow) => {
  //     if(nodeNow.nextNode !== null) {
  //       const nextNode = reverseRecursive(nodeNow.nextNode)
  //       if(nextNode.nextNode === null) {
  //         this.head = nodeNow
  //         return nodeNow
  //       }
  //       nextNode.nextNode = nodeNow
  //     } 
  //     return nodeNow
  //   }
  //   const lastNode = reverseRecursive(this.head)
  //   lastNode.nextNode = null
  //   return this
  // }

  // join = (separator=',') => {
  //   let str = ''
  //   let node = this.head
  //   while(node !== null) {
  //     str += node.nextNode ? `${node.data}${separator}` : `${node.data}`
  //     node = node.nextNode
  //   }
  //   return str
  // }

  // indexOf = (data) => {
  //   let position = 0
  //   let node = this.head
  //   while(node !== null && node.data !== data) {
  //     position = position + 1
  //     node = node.nextNode
  //   }
  //   return node === null ? -1 : position
  // }

  // lastIndexOf = (data) => {
  //   let position = 0
  //   let lastPosition = -1
  //   let node = this.head
  //   while(node !== null) {
  //     if(node.data === data) {
  //       lastPosition = position
  //     }
  //     position = position + 1
  //     node = node.nextNode
  //   }
  //   return lastPosition
  // }

  // forEach = callback => {
  //   let index = 0
  //   let inititalNodeReference = this.head
  //   let node = this.head
  //   while(node !== null) {
  //     callback(index, node.data, inititalNodeReference)
  //     node = node.nextNode
  //     index = index+1
  //   }
  //   return this
  // }

  // concatOtherArray = (otherArray) => {
  //   if(this.head === null) {
  //     this.head = otherArray
  //     return this
  //   }
  //   let node = this.head
  //   while(node.nextNode !== null) {
  //     node = node.nextNode
  //   }  
  //   node.nextNode = otherArray
  // }

  toString = () => {
    let node = this.head
    let str = '[ '
    while(node !== null) {
      if(node.next === null) {
        str += `${node.data} `
      } else {
        str += `${node.data}, `
      }
      node = node.next
    }
    str += ']'
    return str
  }
}

const arr = new ArraySingleLink
console.log(arr.push(3))
console.log(arr.push(5))
console.log(arr.unshift(7))
console.log(arr.unshift(11))
console.log(arr.unshift(15))
console.log(arr.toString())
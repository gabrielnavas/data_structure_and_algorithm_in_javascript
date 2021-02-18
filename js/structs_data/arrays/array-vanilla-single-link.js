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
  constructor() {
    this.head = null
    this.count = 0
  }

  push = data => {
    if (this.isEmpty()) {
      this.head = new Node(data)
    } else {
      let previousNode = this.head
      let nodeNow = previousNode.next
      while (nodeNow !== null) {
        previousNode = nodeNow
        nodeNow = nodeNow.next
      }
      previousNode.next = new Node(data)
    }
    return ++this.count
  }

  unshift = data => {
    if (this.isEmpty()) {
      this.head = new Node(data)
    } else {
      const newNode = new Node(data, this.head)
      this.head = newNode
    }
    return ++this.count
  }

  isEmpty = () => this.head === null

  pop = () => {
    if (this.isEmpty()) {
      return undefined
    }
    let data
    if (this.head.next === null) {
      data = this.head.data
      this.head = null
    } else {
      let previous = this.head
      let node = previous.next
      while (node.next !== null) {
        previous = node
        node = node.next
      }
      data = node.data
      previous.next = null
    }
    --this.count
    return data
  }

  shift = () => {
    if (this.isEmpty()) {
      return undefined
    }
    const data = this.head.data
    this.head = this.head.next
    --this.count
    return data
  }

  reverse = () => {
    const newArray = new ArraySingleLink()
    const reverseRecursive = node => {
      if (node !== null) {
        newArray.unshift(node.data)
        reverseRecursive(node.next)
      }
    }
    reverseRecursive(this.head)
    return newArray
  }

  join = (separator = ',') => {
    let str = ''
    let node = this.head
    while (node !== null) {
      str += node.next
        ? `${node.data}${separator}`
        : `${node.data}`
      node = node.next
    }
    return str
  }

  indexOf = data => {
    let position = 0
    let node = this.head
    while (node !== null && node.data !== data) {
      position = position + 1
      node = node.next
    }
    return node === null
      ? -1
      : position
  }

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
    while (node !== null) {
      if (node.next === null) {
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

const arr = new ArraySingleLink()
arr.push(3)
arr.push(5)
arr.push(7)
arr.push(9)
arr.push(10)
arr.push(15)
console.log(arr.indexOf(7))
console.log(arr.indexOf(99))
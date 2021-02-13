/**
 * HEAD -> <- NODE -> <- NODE ->  <- NODE -\\
 */

class Node {
  constructor(data=null, previous=null, next=null) {
    this.previous = previous
    this.next = next
    this.data = data
  }
}

class ArrayDoubleLink {
  constructor() {
    this.head = null
  }

  push = data => {
    if(this.head === null) {
      this.head = new Node(data)
      return
    }
    let node = this.head
    while(node.next !== null) {
      node = node.next
    }
    const newNode = new Node(data, node)
    node.next = newNode
  }



  toString = () => {
    let node = this.head
    let str = '[ '
    while(node !== null) {
      str = node.next === null 
        ? `${str}${node.data}` 
        : `${str}${node.data}, `
      node = node.next
    }
    str = `${str} ]`
    return str
  }

  toStringReverse = () => {
    const toStrRecursive = node => {
      if(node.next === null) {
        return `[ ${node.data}`
      }
      const str = toStrRecursive(node.next)
      return node.previous !== null 
        ? `${str}, ${node.data}`
        : `${str}, ${node.data} ]`
    }
    return toStrRecursive(this.head)
  }
}

const arr = new ArrayDoubleLink()
arr.push(1)
arr.push(3)
arr.push(5)
arr.push(7)
arr.push(9)
const arrStr = arr.toString()
const arrStrReverse = arr.toStringReverse()
console.log(arrStrReverse)
console.log(arrStr)
class Node {
  constructor(data = null, next = null) {
    this.data = data
    this.next = next
  }
}

class StackLinked {
  constructor() {
    this.head = null
    this.count = 0
  }

  push = data => {
    if (this.isEmpty()) {
      this.head = new Node(data)
    } else {
      const node = new Node(data, this.head)
      this.head = node
    }
    return ++this.count
  }

  pop = () => {
    if(this.isEmpty()) return undefined
    const data = this.head.data
    this.head = this.head.next
    --this.count
    return data
  }

  peek = () => this.head ? this.head.data : undefined

  clear = () => {
    this.head = null
    this.count = 0
  }

  size = () => this.count

  isEmpty = () => this.head === null

  toString = () => {
    if (this.isEmpty()) {
      return '[ ]'
    }
    let node = this.head
    let str = '[ '
    while (node !== null) {
      str = node.next === null
        ? `${str}${node.data}`
        : `${str}${node.data}, `
      node = node.next
    }
    str = `${str} ]`
    return str
  }
}

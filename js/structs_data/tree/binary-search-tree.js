class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert = key => {
    const insertRecursive = (node, key) => {
      if(key < node.key) {
        if(node.left === null) {
          node.left = new Node(key)
        } else {
          insertRecursive(node.left, key)
        }
      } else {
        if(node.right === null) {
          node.right = new Node(key)
        } else {
          insertRecursive(node.right, key)
        }
      }
    } 
    if(this.root === null) {
      this.root = new Node(key)
      return 
    }
    insertRecursive(this.root, key)
  }

  inOrder = () => {
    const recursive = node => {
      if(node !== null) {
        recursive(node.left)
        console.log(node.key)
        recursive(node.right)
      }
    }
    recursive(this.root)
  }
}

const t = new BinarySearchTree()
t.insert(10)
t.insert(2)
t.insert(20)
t.insert(6)
t.inOrder()
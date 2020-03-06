class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null)
      return this.top;
    }
    const node = new _Node(data, this.top)
    this.top = node
    return node;
  }

  pop() {
    if(this.top === null) {
      return;
    }
    const temp = this.top;
    this.top = temp.next;
    return temp.data;
  }
}

function print(list) {
  console.log(list)
}

function main() {
  const starTrek = new Stack()

  starTrek.push('kirk')
  starTrek.push('spock')
  starTrek.push('mccoy')
  starTrek.push('scotty')
  print(starTrek)
}

main();
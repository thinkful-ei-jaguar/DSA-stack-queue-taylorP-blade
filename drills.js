class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class _DoubleNode {
  constructor(data, next, prev) {
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }
  push(data) {
    if(this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
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


const peek = (stack) => {
  return stack.top;
};

const isEmpty = (stack) => {
  return !stack.top;
};

const display = (stack) => {
  
  let stackCopy = stack;
  if (!stackCopy.top) {
    return;
  }

  if (stackCopy.top.next === null) {
    return console.log(`The first and only item is: ${stackCopy.top.data}`);
  }
  while(stackCopy.top.next !== null) {
    console.log(`This item is: ${stackCopy.top.data}`);
    stackCopy.top = stackCopy.top.next;
  }
  console.log(`The 1st item is: ${stackCopy.top.data}`);
  
};

// function is_palindrome(s) {
//   const wordStack = new Stack();
//   let pushedArray = []
  
//   s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//   let str = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
//   // Your code goes here
//   for (let i = 0; i < str.length; i++) {

//     pushedArray.push(wordStack.push(str[i]).data)
    
//     // console.log(pushedArray)
//   }
//   for (let i = 0; i < s.length; i++) {
//     if(pushedArray[i] !== wordStack.pop()) {
//       // console.log(pushedArray[i])
//       return 'Not a palindrome'
      
//     }
//   }
//   return 'That is a palindrome'


// }

function is_palindrome(s) {

  const wordStack = new Stack();
  const secondStack = new Stack();
  
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  
  // Your code goes here
  for (let i = 0; i < s.length; i++) {

    wordStack.push(s[i]);
    
    // console.log(pushedArray)
  }

  for (let i = 0; i < s.length; i++) {
    if(secondStack.push(s[i]).data !== wordStack.pop()) {
      // console.log(pushedArray[i])
      return 'Not a palindrome';
      
    }
  }
  return 'That is a palindrome';


}

const missingPar = (str) => {
  const stack = new Stack();
  const parenStack = new Stack();

  for (let i = 0; i< str.length; i++) {
    if (str[i] === "(" && str[i] === ")" && str[i] === "[" && str[i] === "]" && str[i] === "{" && str[i] === "}")
    {parenStack.push(str[i]);}
  }
  console.log('Take a peek:', display(parenStack));
  let counter = 0;

  for (let i=0; i<str.length; i++) {
    if(stack.push(str[i]).data === '('){
      counter++;
    }
    if(stack.push(str[i]).data === ')'){
      counter--;
    }
  }
  if(counter<0) {
    return `Missing ${Math.abs(counter)}'('`;
  }
  if(counter>0) {
    return `Missing ${Math.abs(counter)}')'`;
  }
  return 'Parenthesis all matched up';
};

const sortStack = (firstStack) => {
  
  let secondStack = new Stack();
  let temp = firstStack.pop();
  
  while (!isEmpty(firstStack))
  {
    if (peek(firstStack).data > temp) {

      secondStack.push(temp);
      temp = firstStack.pop();

    } else {
      secondStack.push(firstStack.pop());
    }
  }
  secondStack.push(temp);
  let temp2 = secondStack.pop();
  while (!isEmpty(secondStack))
  {
    if (peek(secondStack).data < temp2) {

      firstStack.push(temp2);
      temp2 = secondStack.pop();

    } else {
      firstStack.push(secondStack.pop());
    }
  }
  firstStack.push(temp2);

  return firstStack;

};

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    if(this.first === null){
      const node = new _Node(data, null);
      this.first = node;
      this.last = node;
      return node;
    }
    let temp = this.last;
    const node = new _Node(data, null);
    temp.next = node;
    this.last = node;
    return node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    let temp = this.first;
    this.first = this.first.next;
    if(temp === this.last) {
      this.last = null;
    }
    return temp.data;
  }
}

const displayQ = (Q) => {
  
  let QCopy = Q;
  if (!QCopy.first) {
    return;
  }

  if (QCopy.first.next === null) {
    return console.log(`The first and only item is: ${QCopy.first.data}`);
  }
  while(QCopy.first.next !== null) {
    console.log(`This item is: ${QCopy.first.data}`);
    QCopy.first = QCopy.first.next;
  }
  console.log(`The last item is: ${QCopy.first.data}`);
  QCopy.first = null
};

const peekQ = (Q) => {
  if (!Q.first) {
    return;
  }
  return console.log(Q.first.data);
};

const isEmptyQ = (Q) => {
  return console.log(!Q.first);
};


class DoubleQueue {
  constructor() {
    this.first = null;
    this.last = null;
  }

  enqueue(data) {
    if(this.first === null){
      const node = new _DoubleNode(data, null, null);
      this.first = node;
      this.last = node;
      return node;
    }
    let temp = this.last;
    const node = new _DoubleNode(data, null, temp);
    temp.next = node;
    this.last = node;
    return node;
  }

  dequeue() {
    if(this.first === null) {
      return;
    }
    let temp = this.first;
    this.first = this.first.next;
    this.first.prev = null;
    if(temp === this.last) {
      this.last = null;
    }
    return temp.data;
  }
}

function main2() {
  // const starTreakQ = new Queue();

  // isEmptyQ(starTreakQ);
  // peekQ(starTreakQ);
  // starTreakQ.enqueue('kirk');
  // starTreakQ.enqueue('spock');
  // starTreakQ.enqueue('uhura');
  // starTreakQ.enqueue('sulu');
  // starTreakQ.enqueue('checkov');
  // displayQ(starTreakQ);
  // peekQ(starTreakQ);
  // starTreakQ.dequeue();
  // peekQ(starTreakQ);
  // displayQ(starTreakQ);
  // isEmptyQ(starTreakQ);

  //const starTrek = new Queue();
  const starStack1 = new Stack();
  const starStack2 = new Stack();

//enqueue initial stack -> c,sl,u,sp,k ----- enqueue fred in front of kirk ---- output --> c,sl,u,sp,k,f
  // starStack1.push('kirk');
  // starStack1.push('spock');
  // starStack1.push('uhura');
  // starStack1.push('sulu');
  // starStack1.push('checkov');
  // while(starStack1.top !== null){
  //   starStack2.push(starStack1.pop());
  // }
  // starStack1.push('fred');
  // while(starStack2.top !== null){
  //   starStack1.push(starStack2.pop());
  // }
  // display(starStack1)

  //dequeue initial stack -> c,sl,u,sp,k,f ----- dequeue fred ---- output --> c,sl,u,sp,k,
  starStack1.push('fred');
  starStack1.push('kirk');
  starStack1.push('spock');
  starStack1.push('uhura');
  starStack1.push('sulu');
  starStack1.push('checkov');
  while(starStack1.top.next !== null){
    starStack2.push(starStack1.pop());
  }
  starStack1.pop();
  while(starStack2.top !== null){
    starStack1.push(starStack2.pop());
  }
  display(starStack1)
  

  // starTrek.enqueue('kirk');
  // starTrek.enqueue('spock');
  // starTrek.enqueue('uhura');
  // starTrek.enqueue('sulu');
  // starTrek.enqueue('checkov');
  // displayQ(starTrek)
}

main2();

function main() {
  // const starTrek = new Stack();
  // starTrek.push(krk');
  // starTrek.push('spock');
  // starTrek.push('mccoy');
  // starTrek.push('scotty');

  // console.log(peek(starTrek));
  // console.log(isEmpty(starTrek));
  // console.log(starTrek.pop());
  // console.log(starTrek.pop());

  // True, true, true, false
  // console.log(is_palindrome("dad"));
  // console.log(is_palindrome("A man, a plan, a canal: Panama"));
  // console.log(is_palindrome("1001"));
  // console.log(is_palindrome("Tauhida"));

  // console.log(is_palindrome('fred'));
  // console.log(is_palindrome("racecar racecar"));
  // console.log(missingPar('x+(g-3)'));
  // console.log(missingPar('x+(g-3))))'));
  // console.log(missingPar('x+(g-3(((('));

  const numberino = new Stack();
  numberino.push(5);
  numberino.push(3);
  numberino.push(2);
  numberino.push(6);
  numberino.push(1);
  numberino.push(4);
  numberino.push(6111);
  numberino.push(83);
  numberino.push(85);
  numberino.push(84);
  numberino.push(18);
  numberino.push(83333333);
  numberino.push(9837);
  numberino.push(8008);
  numberino.push(1111110101010);
  numberino.push(9);
  numberino.push('tomato');
  numberino.push(7);
  numberino.push(0);




  const sortedNumbers = sortStack(numberino);
  const sortedNumbers2 = sortStack(sortedNumbers);
  const sortedNumbers3 = sortStack(sortedNumbers2);
  const sortedNumbers4 = sortStack(sortedNumbers3);
  const sortedNumbers5 = sortStack(sortedNumbers4);
  const sortedNumbers6 = sortStack(sortedNumbers5);
  display(sortedNumbers6);
  
}

// main();
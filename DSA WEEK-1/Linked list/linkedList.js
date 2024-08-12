class Node{
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList{
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }
  getSize() {
    return this.size;
  }
  prepend(value) {//prepend has constant time complexity
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node;

    }
    else {
      node.next = this.head;
      this.head = node;
    }
    this.size++
  }
  append(value) {//append has a linear time complexity
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node;
    }
    else {
      let previous = this.head;
      while (previous.next) {
        previous = previous.next;
      }
      previous.next = node;
    }
    this.size++;
  }
  
  insert(value,index) {
                 if (index < 0||index>this.size) {
      return;
    }
    if (index == 0) {
      this.prepend(value)
    } else {
      
      const node = new Node(value);
      let prev = this.head
      for (let i = 0; i < index - 1; i++){
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
 
  removeNode(index) {
    if (index < 0 || index >= this.size) {
      return null;

    }
    let removed;
    if (index === 0) {
      removed = this.head;
      this.head = this.head.next;
    }
    else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++){
        prev = prev.next
      }
      removed = prev.next;
      prev.next = removed.next
    }
    this.size--
    return removed
  }

  searchNode(value) {
    if (this.isEmpty()) {
      return -1;
    }
    
    let curr = this.head,i=0;
    while (curr) {
      if (curr.value == value) {
        return i
      }
      i++;
      curr= curr.next
    }

  }
  reverseList() {

    let curr = this.head;
    let prev = null;
    let next;
    while (curr) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  print() {
   
    if (this.isEmpty()) {
      console.log("The list is empty")
    }
    else {
     
      let listValues = '';
      let curr = this.head;
      while (curr) {
        listValues = listValues + `${curr.value} `
        curr = curr.next;
      }
      console.log(listValues)
    }
  }
}

const List = new LinkedList()//creating an instance for this class linkedlist
List.append(30)
List.append(20)
List.insert(10, 1)
List.print()
List.append(50)
List.print()
List.reverseList()
List.removeNode(2)
List.print()

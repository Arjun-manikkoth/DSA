class hashTable{
  constructor(size) {
    this.Table = new Array(size);
    this.size = size;
  }
  hash(key) {

    let total = 0;
    for (let i = 0; i < key.length; i++){
      total += key.charCodeAt(i)
    }
    return total % this.size;
    
  }
  set(key, value) {
    let index = this.hash(key)
    this.Table[index] = value; 
  }
  get(key) {
    let index = this.hash(key)
    return this.Table[index]
  }
  remove(key) {
    let index = this.hash(key);
    this.Table[index] = undefined;
  }
  display() {
    for (let i = 0; i < this.Table.length; i++){
      if (this.Table[i]) {
       console.log(i,this.Table[i])
     } 
    }
  }
}

const table = new hashTable(10)

table.set("name", "ali")
// table.set("mane","arjun")
table.set("age", 23)
console.log(table.get("name"))
table.display()
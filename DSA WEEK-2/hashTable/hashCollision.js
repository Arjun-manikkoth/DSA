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
    let bucket = this.Table[index]
    if (!bucket) {
      this.Table[index]=[[key,value]]
    } else {
      const keyExist = bucket.find((each) => { return each[0] === key})
        if (keyExist) {
          keyExist[1] = value;
        } else {
          bucket.push([[key,value]])
        }
    }
  }
  get(key) {
    let index = this.hash(key)
    let bucket = this.Table[index]

    if (bucket) {
      const itemExists = bucket.find((item) => { return item[0] === key })
      if (itemExists) {
        return itemExists[1]
      }
    }
    else {
      return undefined;
    }
  }
  remove(key) {
    let index = this.hash(key);
    let bucket = this.Table[index]

    if (bucket) {
      let itemExists = bucket.find((each) => {
        return each[0] === key
      })
      if (itemExists) {
        bucket .splice(bucket.indexOf(itemExists),1)
      }
    }
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
table.set("mane","arjun")
table.set("age", 23)
console.log(table.get("name"))
table.display()
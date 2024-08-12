class hashTable{
  constructor(size) {
    this.Table = new Array(size)
    this.size = size
  }
  hash(key) {
    
    let total = 0;
    for (let i = 0; i < key.length; i++){
      total+=key.charCodeAt(i)
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key)
    
    while (this.Table[index] !== undefined && this.Table[index][0] !== key) {
      index = (index + 1) % this.size;

    }
    this.Table[index]=[key,value]
  }
  get(key) {

    let index = this.hash(key)
    while (this.Table[index] !== undefined) {
      if (this.Table[index][0] == key) {
        return this.Table[index][1]
      }
      index = (index + 1) % this.size;
    }
    return undefined;
  }
}
class TrieNode{
  constructor() {
      this.children = {}
      this.isEnd = false;
  }
}

class Trie{
  constructor() {
      this.root = new TrieNode()
  }

  insert(word) {
      let node = this.root;

      for (let char of word) {
          if (!node.children[char]) {
              node.children[char] = new TrieNode()
          }
          node = node.children[char]
      }
      node.isEnd = true;

  }

  search(word) {
      let node = this.root;
      for (let char of word) {
          if (!node.children[char]) {
              console.log(word + " - Not present in the Trie")
              return;
          }
          node = node.children[char]
      }
      if (node.isEnd) {
          console.log(word+"- Present in this Trie")
      } else {
          console.log(word+'- Not present in this Trie')
      }

  }

  startsWith(prefix) {

      let node = this.root;
      for (let char of prefix) {
          if (!node.children[char]) {
              console.log(prefix + '- Not present as prefix in Trie')
              return;
          }
          node = node.children[char]
      }
      console.log(prefix+"- Present as  prefix in Trie")
  }
  
  getWordsWithPrefix(prefix) {
      
      let node = this.root;
    
        for (let char of prefix) {
          if (!node.children[char]) {
            console.log(prefix + " - No words with this prefix in Trie");
            return [];
          }
          node = node.children[char];
        }
    
        const suggestions = [];
        this.collectAllWords(node, prefix, suggestions);
        return suggestions;
    
      }
    
  collectAllWords(node, prefix, suggestions) {
        
        if (node.isEnd) {
          suggestions.push(prefix);
        }
        for (let char in node.children) {
          this.collectAllWords(node.children[char], prefix + char, suggestions);
    }
    
    }
  
}

const trie = new Trie();

trie.insert('arjun')
trie.insert('arjuna')
trie.search('arjun')
trie.search('arjuna')
trie.startsWith('arj')
console.log(trie.getWordsWithPrefix('ar'))

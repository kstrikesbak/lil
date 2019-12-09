const Node = (value) => {
  return {
    value : value,
    next: null,
  }
}

const Lil = () => {
  return {
    head: null,

    values: function(value) {
      const newArr = []
      let current = this.head
      
      while (current !== null) {
        newArr.push(current.value)
        current = current.next
      }
      return newArr
    },

    addToStart: function(value) {
      if (this.head) {
        let current = this.head
        let obj = Node(value)
        obj.next = current
        this.head = obj
      }

      if (!this.head) {
        this.head = Node(value)
      }

    },

    addToEnd: function(value) {
      if (this.head) {
        let current = this.head
        let obj = Node(value)
        obj.next = current
        this.head = obj
      }

      if (!this.head) {
        this.head = Node(value)
      }
    },

    removeFromStart: function() {
    
    },

    removeFromEnd: function() {
    
    },

    getAt: function(i) {
    
    },

    removeAt: function(i) {
    
    },
  }
}


module.exports = {
  Lil,
  Node,
}
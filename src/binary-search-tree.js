const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
 /*  constructor() {
    this.root = null;
  } */
  
  root() {
    /* this.root = this.root.data ? this.root : null;
    console.dir('root '+this.root);  */
    //return this.root.data ? this.root : null;

    if (!(this._root instanceof Node)) {
      console.dir('!root')
      console.dir(this._root)
      //return new Node(value);
      return null;
    } else {
      console.dir('root');
      console.dir(this._root)
      //console.dir(this.root().data)
    return this._root;
  } 

    //return this.root.data ? this.root : null;
  }

  add(value) {
    console.dir('add');
    console.dir(this._root);
    this._root = addWithin(this.root(), value);
    //console.dir(this.root);

    function addWithin(node, value) {
      console.dir('addWithin');
      console.dir(node);
     //console.dir(node.data);
      if (!(node instanceof Node)) {
        console.dir('value ' +value)
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
        node.left = addWithin(node.left, value);
      } else {
        node.right = addWithin(node.right, value);
      }
      console.dir('addWithin return');
      console.dir(node);
      return node;
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};

class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null 
    }
    isEmpty(){
        return this.root === null
    }
    insert(value){
        const newNode = new Node(value)
        if(this.isEmpty()){
            this.root = newNode
        }
        else{
            this.insertNode(this.root, newNode)
        }
    }
    insertNode(root, newNode){
        if(newNode.value < root.value){
            if(root.left === null){
                root.left = newNode
            }else{
                this.insertNode(root.left, newNode)
            }
        }else{
            if(newNode.value > root.value){
                if(root.right === null){
                    root.right = newNode
                }else{
                    this.insertNode(root.right, newNode)
            }
        }
    }
}

//DFS
    search(root, value){
        if(!root){
            return ("Not Found")
        }else{
            if(root.value === value){
                return true
            }if(value < root.value){
                return this.search(root.left, value)
            }else{
                return this.search(root.right, value)
            }
        }
    }

    preOrder(root){
        if(root){
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root){
        if(root){
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right)
        }
    }
    postOrder(root){
        if(root){
            this.postOrder(root.left);
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    BFSsearch(){
        const queue = []
        queue.push(this.root)
        while(queue.length){
            let curr = queue.shift()
            console.log(curr.value);
            if(curr.left){
                queue.push(curr.left)
            }
            if(curr.right){
                queue.push(curr.right)
            }
        }
    }
    Min(root){
        if(this.isEmpty()){
            return null
        }
        if(!root.left){
            return root.value
        }
        else{
            return this.Min(root.left)
        }
    }
    Max(root){
        if(this.isEmpty()){
            return null
        }
        if(!root.right){
            return root.value
        }
        else{
            return this.Max(root.right)
        }
    }
    Delete(value){
        this.root = this.DeleteNode(this.root, value)
    }
    DeleteNode(root, value){
        if(root === null){
            return root
        }
        if(value < root.value){
            root.left = this.DeleteNode(root.left, value)
        }
        else if(value > root.value){
            root.right = this.DeleteNode(root.right, value)
        }
        else{
            if(!root.left && !root.right){
                return null
            }
            if(!root.left){
                return root.right
            }
            else if(!root.right){
                return root.left
            }
            root.value = this.Min(root.right)
            root.right = this.DeleteNode(root.right, root.value) 
        }
        return root
    }
    print(node, level){
        if(!node){
            return 
        }
        if(level === 1){
            console.log("node.value");
        }else if(level > 1){
            this.print(node.left, level-1)
            this.print(node.right, level-1)
        }
    }
}


const bst = new binarySearchTree()
bst.insert(10)
bst.insert(20)
bst.insert(5)
bst.insert(15)
bst.insert(25)
bst.insert(18)


// console.log(bst.search(bst.root, 7));
// bst.inOrder(bst.root)
// console.log(bst.search(bst.root, 10));
// bst.BFSsearch()

// console.log(bst.Max(bst.root));
// console.log(bst.Min(bst.root));

// bst.Delete(10)
// bst.BFSsearch()
bst.print(bst.root, 25)
//https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let heap = new MinHeap();
    
    let root = null;
    let parent = null;
    // move first element from each list to Heap
    
    for(let node of lists) {
        if(node) {
        heap.addHead(node);
        }
    }
    
    // remove top from heap and add to result
    
    while(heap.size) {
        let top = heap.deleteRoot();
        let node = new ListNode(top.val, null);
        
        if(!root) {
            root = node
        } else {
            parent.next = node;
        }
        parent = node;
        
        //Add next element to the heap
        if(top.next) {
            heap.addHead(top.next);
        }
    }
    return root;
};


class MinHeap {
    constructor() {
        this.heap = [];
        this.size = 0;
    }
    
    getLeftChild(i) {
        return 2 * i + 1;
    }
    
    getRightChild(i) {
        return 2*i + 2;
    }
    
    getParent(i) {
        return Math.floor( (i-1) /2);
    }
    
    addHead(node) {
        this.heap.push(node);
        this.size++;
        this.heapifyUp(this.size -1);
        
    }
    
    swapEle(i,j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]] 
    }
    
    heapifyUp(i) {
        if( i === 0) {
            return;
        }
        let parent = this.getParent(i);
        if( this.heap[parent].val > this.heap[i].val) {
            this.swapEle(parent, i);
        }
        this.heapifyUp(parent);
        
    }
    
    deleteRoot() {
        if(this.size === 0 ) return;
        let root = this.heap[0];
        this.swapEle(0, this.size-1);
        this.heap.pop();
        this.size--;
        this.heapifyDown(0);
        return root;
    }
    
    heapifyDown(i) {
        let left = this.getLeftChild(i);
        let right = this.getRightChild(i);
        let min = i;
        if(left < this.size && this.heap[left].val < this.heap[min].val ) {
            min = left;
        }
        if(right < this.size && this.heap[right].val < this.heap[min].val ) {
            min = right;
        }
        
        if( i !== min) {
            this.swapEle(i, min);
            this.heapifyDown(min);
        }
        
    }
}
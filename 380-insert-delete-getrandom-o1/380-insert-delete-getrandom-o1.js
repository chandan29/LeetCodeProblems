
class RandomizedSet {
    constructor() {
        this.set = new Map();
        this.arr = [];
    }
    
    insert(val) {
        if(!this.set.has(val)) {
            this.arr.push(val);
            this.set.set(val, this.arr.length - 1);
            return true;
        }
        return false;
    }
    
    remove(val) {
        if(this.set.has(val)) {
            const index = this.set.get(val);
            if(this.arr.length > 1) {
                this.arr[index] = this.arr[this.arr.length - 1];
                this.set.set(this.arr[index], index);
            }
            this.arr.pop();
            this.set.delete(val);
            return true;
        }
        return false;
    }
    
    getRandom() {
        const min = 0;
        const max = this.arr.length;
        const random = Math.floor(Math.random() * (max-min));
        return this.arr[random];
    }
    
};